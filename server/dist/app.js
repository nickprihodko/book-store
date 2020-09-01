"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import sequelize from './config/db';
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = require("./routes/api/index");
const app = express_1.default();
// Init Middleware
// app.use(express.json({ extended: false }));
// app.get("/", (req: Request, res: Response) => res.send("API Running"));
// Define routes
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use("/images", express_1.default.static(__dirname + "/public"));
app.use("/api/books", index_1.books);
app.use("/api/categories", index_1.categories);
app.use("/api/authors", index_1.authors);
app.use("/api/reviews", index_1.reviews);
app.use("/api/users", index_1.users);
app.use("/api/auth", index_1.auth);
app.use("/api/favorites", index_1.favorites);
app.use("/api/userfavoritesbooks", index_1.userfavoritesbooks);
exports.default = app;
//# sourceMappingURL=app.js.map