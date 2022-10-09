import { ITodo } from "../../model/Todo";
import { ITodoRepository } from "../../repository/TodoRepository";

export interface IGetTodosUseCase {
    invoke: () => Promise<ITodo[]>

}

export class GetTodos implements IGetTodosUseCase {
    private todoRepo: ITodoRepository
    constructor(_todoRepo: ITodoRepository) {
        this.todoRepo = _todoRepo;
    }

    async invoke() {
        return this.todoRepo.getTodos()
    }
}