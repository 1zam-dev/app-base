import { useState } from "react";
import TodoAPIDataSourceImpl from "../../../modules/todo/data/DataSource/API/TodoAPIDataSource";
import { TodoRepositoryImpl } from "../../../modules/todo/data/Repository/TodoRepositoryImpl";
import { ITodo } from "../../../modules/todo/domain/model/ITodo";
import { GetTodos } from "../../../modules/todo/domain/useCase/Todo/GetTodos";

export default function TodoListViewModel() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const UseCase = new GetTodos(
        new TodoRepositoryImpl(new TodoAPIDataSourceImpl())
    );

    async function getTodos() {
        setTodos(await UseCase.invoke());
    }

    return {
        getTodos,
        todos,
    };
}