"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = __importDefault(require("config"));
const User_1 = __importDefault(require("../models/User"));
const Book_1 = __importDefault(require("../models/Book"));
const Category_1 = __importDefault(require("../models/Category"));
const Rate_1 = __importDefault(require("../models/Rate"));
const Favorite_1 = __importDefault(require("../models/Favorite"));
const Review_1 = __importDefault(require("../models/Review"));
const sequelize = new sequelize_typescript_1.Sequelize(config_1.default.get("database"), config_1.default.get("login"), config_1.default.get("password"), {
    dialect: "postgres",
    host: "localhost",
    define: {
        timestamps: false,
    },
    models: [__dirname + '../models/**/*.ts'],
    modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.ts')) === member.toLowerCase();
    },
});
sequelize.authenticate().then(() => {
    console.log("Connection to Database has been established successfully.");
});
sequelize.addModels([User_1.default, Book_1.default, Category_1.default, Rate_1.default, Favorite_1.default, Review_1.default]);
exports.default = sequelize;
//# sourceMappingURL=db.js.map