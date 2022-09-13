export default interface IService<T> {
  findAll(): Promise<T[]>
  findOne(id: string): Promise<T | null>
  create(obj: T): Promise<T>
}