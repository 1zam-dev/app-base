import { ITodo } from "../model/Todo";

export interface ITodoRepository {
    getTodos(): Promise<ITodo[]>;
}