const express = require("express");
const sequelize = require("./config/db");
var path = require("path");

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define routes
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(__dirname + "/public"));

app.use("/api/reviews", require("./routes/api/reviews"));
app.use("/api/categories", require("./routes/api/categories"));
app.use("/api/books", require("./routes/api/books"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

sequelize.authenticate().then(
  () => {
    console.log("Connection to Database has been established successfully.");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  },
  (err) => {
    console.log("Unable to connect to the database:", err);
  }
);
