import IUser from "../Interfaces/IUser";
import IUserService from "../Interfaces/IUserService";
import User from "../Models/User";

export default class UserService implements IUserService {
  protected _userModel = new User()
  async findAll(): Promise<IUser[]> {
    const users = this._userModel.findAll()
    return users;
  }

  async findOne(id: string): Promise<IUser | null> {
    const user = this._userModel.findOne(id)
    return user;
  }
}