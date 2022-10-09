import { ITodo } from "../../domain/model/Todo";

export default interface ITodoDataSource {
    getTodos(): Promise<ITodo[]>;
}