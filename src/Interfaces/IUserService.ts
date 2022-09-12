import User from "./IUser";

export default interface IUserService {
  findAll(): Promise<User[]>
  findOne(id: string): Promise<User>
}