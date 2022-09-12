"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../Controllers/UserController"));
const UserService_1 = __importDefault(require("../Services/UserService"));
const userService = new UserService_1.default();
const userController = new UserController_1.default(userService);
const userRouter = (0, express_1.Router)();
userRouter.get('/', (req, res) => userController.findAll(req, res));
userRouter.get('/:id', (req, res) => userController.findOne(req, res));
userRouter.post('/', (req, res) => userController.create(req, res));
exports.default = userRouter;
