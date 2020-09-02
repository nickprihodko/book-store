const express = require("express");
const sequelize = require("./config/db");
var path = require("path");
const fetch = require('node-fetch');
const redis = require('redis');

const app = express();
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Github redis
function setResponse(username, repos){
  return `<h2>${username} has ${repos} Github repos</h2>`;
};

async function getRepos(req, res, next) {
  try {
    console.log('Fetching data...');
    const { username } = req.params;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    const repos = data.public_repos;

    // set data to Redis
    client.setex(username, 3600, repos);

    res.send(setResponse(username, repos));
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

// cache middleware
function cache(req, res, next){
  const { username } = req.params;

  client.get(username, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send(setResponse(username, data))
    } else {
      next();
    }
  })
}

app.get('/repos/:username', cache, getRepos);

// Define routes
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(__dirname + "/public"));

app.use("/api/reviews", require("./routes/api/reviews"));
app.use("/api/books", require("./routes/api/books"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

app.use("/api/categories", require("./routes/api/categories"));
app.use("/api/authors", require("./routes/api/authors"));
app.use("/api/favorites", require("./routes/api/favorites"));
app.use("/api/userfavoritesbooks", require("./routes/api/userfavoritesbooks"));

sequelize.authenticate().then(
  () => {
    console.log("Connection to Database has been established successfully.");
  },
  (err) => {
    console.log("Unable to connect to the database:", err);
  }
);

module.exports = app;