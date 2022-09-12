import { Router } from "express";
import UserController from "../Controllers/UserController";
import UserService from "../Services/UserService";

const userService = new UserService()
const userController = new UserController(userService)
const userRouter = Router();

userRouter.get('/', (req, res) => userController.findAll(req, res));
userRouter.get('/:id', (req, res) => userController.findOne(req, res));

export default userRouter;