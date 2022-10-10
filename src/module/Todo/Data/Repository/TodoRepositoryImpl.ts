import { ITodo } from "../../domain/model/ITodo";
import { ITodoRepository } from "../../domain/repository/ITodoRepository";
import ITodoDataSource from "../DataSource/ITodoDataSource";

export class TodoRepositoryImpl implements ITodoRepository {
  dataSource: ITodoDataSource;

  constructor(_datasource: ITodoDataSource) {
    this.dataSource = _datasource;
  }

  async getTodos(): Promise<ITodo[]> {
    return this.dataSource.getTodos();
  }
}
