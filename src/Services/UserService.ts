import IUser from "../Interfaces/IUser";
import IUserService from "../Interfaces/IUserService";
import User from "../Models/User";

export default class UserService implements IUserService {
  protected _userModel = new User()
  async findAll(): Promise<IUser[]> {
    const users = await this._userModel.findAll()
    return users;
  }

  async findOne(id: string): Promise<IUser | null> {
    const user = await this._userModel.findOne(id)
    return user;
  }

  async create(obj: IUser): Promise<IUser> {
    const user = await this._userModel.create(obj)
    return user;
  }
}