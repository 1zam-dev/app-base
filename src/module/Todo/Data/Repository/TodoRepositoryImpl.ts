import { ITodo } from "../../domain/model/Todo";
import { ITodoRepository } from "../../domain/repository/TodoRepository";
import ITodoDataSource from "../DataSource/TodoDataSource";

export class TodoRepositoryImpl implements ITodoRepository {
  dataSource: ITodoDataSource;

  constructor(_datasource: ITodoDataSource) {
    this.dataSource = _datasource;
  }

  async getTodos(): Promise<ITodo[]> {
    return this.dataSource.getTodos();
  }
}
