import { ITodo } from "../model/ITodo";

export interface ITodoRepository {
    getTodos(): Promise<ITodo[]>;
}