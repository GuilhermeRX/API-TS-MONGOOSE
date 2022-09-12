import { default as IUser, default as User } from "./IUser";

export default interface IUserService {
  findAll(): Promise<User[]>
  findOne(id: string): Promise<IUser | null>
}