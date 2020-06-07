const express = require("express");

const Sequelize = require("sequelize");
const config = require("config");

const app = express();

console.log(123);

const sequelize = new Sequelize("bookstore", "postgres", "sys123", {
  dialect: "postgres",
  host: "localhost",
  define: {
    timestamps: false,
  },
});

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

console.log(123);

// Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
