import { AppError } from "../errors/AppError.js";
import taskRepository from "../repositories/task.repository.js";

async function getTasksService() {
    return taskRepository.getTasksRepository();
}

async function getTaskByIdService(id: number) {
    const result = await taskRepository.getTaskByIdRepository(id);
    if(!result) {
        throw new AppError(404, "Task Not Found");
    }
    return result;
}

async function createTaskService(title: string) {
    return taskRepository.createTaskRepository(title);
}

async function updateTaskService(id: number, title: string, completed: boolean) {
    const result = await taskRepository.updateTaskRepository(id, title, completed);
    if(!result) {
        throw new AppError(404, "Task Not Found");
    }
    return result;
}

async function deleteTaskService(id: number) {
    const result = await taskRepository.deleteTaskRepository(id);
    if(!result) {
        throw new AppError(404, "Task Not Found");
    }
    return result;
}

export default {
    getTasksService,
    getTaskByIdService,
    createTaskService,
    updateTaskService,
    deleteTaskService
}