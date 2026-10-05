import taskRepository from "../repositories/task.repository.js";

async function getTasksService() {
    return taskRepository.getTasksRepository();
}

async function getTasksByIdService(id: number) {
    return taskRepository.getTasksByIdRepository(id);
}

export default {
    getTasksService,
    getTasksByIdService
}