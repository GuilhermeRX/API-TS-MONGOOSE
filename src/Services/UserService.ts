import IService from "../Interfaces/IService";
import IUser, { userSchemaZod } from "../Interfaces/IUser";
import User from "../Models/User";

export default class UserService implements IService<IUser>{
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
    userSchemaZod.parse(obj);
    const user = await this._userModel.create(obj)
    return user;
  }
}