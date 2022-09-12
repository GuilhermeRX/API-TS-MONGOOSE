import { model as mongoseCreateModel, Schema } from "mongoose";
import IUser from "../Interfaces/IUser";
import MongoModel from "./MongoModel";

const userSchema = new Schema<IUser>({
  name: String,
  email: String,
});

export default class User extends MongoModel<IUser> {
  constructor(model = mongoseCreateModel('Users', userSchema)) {
    super(model);
  }
}