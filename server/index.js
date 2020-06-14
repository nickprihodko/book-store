const express = require("express");
const sequelize = require("./config/db");

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Define routes
app.use("/api/books", require("./routes/api/books"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

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
