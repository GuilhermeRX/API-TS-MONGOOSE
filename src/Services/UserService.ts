import IUser from "../Interfaces/IUser";
import IUserService from "../Interfaces/IUserService";

export default class UserService implements IUserService {
  async findAll(): Promise<IUser[]> {

  }

  async findOne(id: string): Promise<IUser> {

  }
}