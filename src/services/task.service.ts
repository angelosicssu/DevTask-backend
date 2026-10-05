import taskRepository from "../repositories/task.repository.js";

async function getTasksService() {
    return taskRepository.getTasksRepository();
}

export default {
    getTasksService
}