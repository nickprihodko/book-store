"use strict";
// const Sequelize = require("sequelize");
// const config = require("config");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const config_1 = __importDefault(require("config"));
const sequelize = new sequelize_1.default(config_1.default.get("database"), config_1.default.get("login"), config_1.default.get("password"), {
    dialect: "postgres",
    host: "localhost",
    define: {
        timestamps: false,
    },
});
module.exports = sequelize;
//# sourceMappingURL=db.js.map