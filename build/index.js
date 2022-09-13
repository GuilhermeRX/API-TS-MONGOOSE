"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const zod_1 = require("zod");
const catalog_1 = require("./errors/catalog");
require("./Models/connection");
const user_route_1 = __importDefault(require("./Routes/user.route"));
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.use('/user', user_route_1.default);
app.use((err, req, res, next) => {
    if (err instanceof zod_1.ZodError)
        return res.status(404).json({ message: err.issues });
    const messageAsErrorType = err.message;
    const mappedError = catalog_1.errorCatalog[messageAsErrorType];
    if (mappedError) {
        const { httpStatus, message } = mappedError;
        return res.status(httpStatus).json({ message });
    }
    return res.status(500).json({ message: 'internal error' });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
