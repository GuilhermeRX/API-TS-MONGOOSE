"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MongoModel_1 = __importDefault(require("./MongoModel"));
const userSchema = new mongoose_1.Schema({
    name: String,
    email: String,
});
class User extends MongoModel_1.default {
    constructor(model = (0, mongoose_1.model)('Users', userSchema)) {
        super(model);
    }
}
exports.default = User;
