"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectToDb = (0, mongoose_1.connect)('mongodb://localhost:27017/userStore?authSource=admin');
console.log('connect', connectToDb);
exports.default = connectToDb;
