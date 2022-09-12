import { Request, Response } from "express";
import IUserController from "../Interfaces/IUserController";
import UserService from "../Services/UserService";

export default class UserController implements IUserController {
  constructor(private service: UserService) { }

  async findAll(req: Request, res: Response): Promise<Response> {
    const users = await this.service.findAll()
    return res.status(200).json(users);
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    const id = req.params.id
    const user = await this.service.findOne(id);
    return res.status(200).json(user);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const newUser = req.body
    const user = await this.service.create(newUser);
    return res.status(201).json(user);
  }
}