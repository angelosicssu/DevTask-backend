import { AppError } from "../errors/AppError.js";
import taskRepository from "../repositories/task.repository.js";

async function getTasksService() {
    return taskRepository.getTasksRepository();
}

async function getTaskByIdService(id: number) {
    const result = await taskRepository.getTaskByIdRepository(id);
    if(!result) {
        throw new AppError(404, "Task not found");
    }
    return result;
}

export default {
    getTasksService,
    getTaskByIdService
}