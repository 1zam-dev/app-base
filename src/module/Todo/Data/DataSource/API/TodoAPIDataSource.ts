import { ITodo } from "src/module/todo/domain/model/Todo";
import ITodoDataSource from "../TodoDataSource";
import { TodoAPIEntity } from "./Entity/TodoAPIEntity";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface TypedResponse<T = any> extends Response {
    json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
    return fetch.apply(window, args);
}

export default class TodoAPIDataSourceImpl implements ITodoDataSource {
    async getTodos(): Promise<ITodo[]> {
        let response = await myFetch<TodoAPIEntity[]>(`${BASE_URL}/todos`);
        let data = await response.json();
        return data.map((item) => ({
            id: item.id,
            title: item.title,
            isComplete: item.completed,
        }));
    }
}