export default interface IModel<T> {
  findAll(): Promise<T[]>
  findOne(_id: string): Promise<T | null>
  create(obj: T): Promise<T>
}
