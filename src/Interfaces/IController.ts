import { Request, Response } from "express";

export default interface IController {
  findAll(req: Request, res: Response): Promise<Response>
  findOne(req: Request, res: Response): Promise<Response>
  create(req: Request, res: Response): Promise<Response>
}