import { isValidObjectId, Model } from "mongoose";
import { ErrorTypes } from "../errors/catalog";
import IModel from "../Interfaces/IModel";

export default abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>

  constructor(model: Model<T>) {
    this._model = model
  }

  public async findAll(): Promise<T[]> {
    return this._model.find()
  }

  public async findOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) {
      throw new Error(ErrorTypes.InvalidMongoId)
    }
    return this._model.findOne({ _id })
  }

  public async create(obj: T): Promise<T> {
    console.log('mongoModel', obj)
    return this._model.create({ ...obj });
  }
}