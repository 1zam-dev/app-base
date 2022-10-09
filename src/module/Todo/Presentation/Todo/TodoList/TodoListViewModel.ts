import { useState } from "react";
import TodoAPIDataSourceImpl from "../../../data/DataSource/API/TodoAPIDataSource";
import { TodoRepositoryImpl } from "../../../data/Repository/TodoRepositoryImpl";
import { ITodo } from "../../../domain/model/Todo";
import { GetTodos } from "../../../domain/useCase/Todo/GetTodos";

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