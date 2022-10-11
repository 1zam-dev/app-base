import { ITodo } from "src/modules/todo/domain/model/ITodo";
import ITodoDataSource from "../ITodoDataSource";
import { ITodoAPIEntity } from "./Entity/ITodoAPIEntity";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface TypedResponse<T = any> extends Response {
    json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
    return fetch.apply(window, args);
}

export default class TodoAPIDataSourceImpl implements ITodoDataSource {
    async getTodos(): Promise<ITodo[]> {
        let response = await myFetch<ITodoAPIEntity[]>(`${BASE_URL}/todos`);
        let data = await response.json();
        return data.map((item) => ({
            id: item.id,
            title: item.title,
            isComplete: item.completed,
        }));
    }
}