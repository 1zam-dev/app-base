import { ITodo } from "../../domain/model/ITodo";

export default interface ITodoDataSource {
    getTodos(): Promise<ITodo[]>;
}