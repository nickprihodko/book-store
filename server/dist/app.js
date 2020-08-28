"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
// const sequelize = require("./config/db");
var path = require("path");
const app = express_1.default();
// Init Middleware
// app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API Running"));
// Define routes
app.use(express_1.default.static(path.join(__dirname, "public")));
app.use("/images", express_1.default.static(__dirname + "/public"));
app.use("/api/reviews", require("./routes/api/reviews"));
app.use("/api/books", require("./routes/api/books"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/categories", require("./routes/api/categories"));
app.use("/api/authors", require("./routes/api/authors"));
app.use("/api/favorites", require("./routes/api/favorites"));
app.use("/api/userfavoritesbooks", require("./routes/api/userfavoritesbooks"));
db_1.default.authenticate().then(() => {
    console.log("Connection to Database has been established successfully.");
    // const PORT = process.env.PORT || 5000;
    // app.listen(PORT, () => {
    //   console.log(`Server started on port ${PORT}`);
    // });
}, (err) => {
    console.log("Unable to connect to the database:", err);
});
module.exports = app;
//# sourceMappingURL=app.js.map