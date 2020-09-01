"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUser = exports.registerUser = void 0;
const express_validator_1 = require("express-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwtSign_1 = __importDefault(require("../utils/jwtSign"));
const User_1 = __importDefault(require("../models/User"));
exports.registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
        // See if user exists
        let user = yield User_1.default.findOne({
            where: {
                email,
            }
        });
        if (user) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }
        user = new User_1.default({
            name,
            email,
            password,
        });
        // Encrypt password
        const salt = yield bcryptjs_1.default.genSalt(10);
        user.password = yield bcryptjs_1.default.hash(password, salt);
        yield user.save();
        // Return JWT
        const token = jwtSign_1.default(user);
        res.json({ token });
    }
    catch (err) {
        console.log("registerUser:", err.message);
        res.status(500).json({ message: err.message });
    }
});
// get user
exports.getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findOne({
            attributes: ["id", "name", "email", "password", "avatar", "about"],
            where: {
                id: req['user'].id,
            },
        });
        if (!user) {
            return res.status(400).json({ msg: "There is no user" });
        }
        return res.json(user);
    }
    catch (err) {
        console.log("getUser:", err.message);
        res.status(500).json({ message: err.message });
    }
});
// update user
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req['file']) {
        req.body.avatar = `/images/uploads/${req['file'].filename}`;
    }
    try {
        let user = yield User_1.default.findOne({
            where: {
                id: req['user'].id,
            },
        });
        if (user) {
            yield User_1.default.update({ about: req.body.about, avatar: req.body.avatar }, { where: { id: req['user'].id } });
            const user = yield User_1.default.findOne({
                where: { id: req['user'].id },
            });
            return res.json(user);
        }
        else {
            user = new User_1.default({
                id: req['user'].id,
                about: req.body.about,
                avatar: req.body.avatar,
            });
            yield user.save();
        }
        return res.json(user);
    }
    catch (err) {
        console.log("updateUser:", err.message);
        res.status(500).json({ message: err.message });
    }
});
//# sourceMappingURL=userController.js.map