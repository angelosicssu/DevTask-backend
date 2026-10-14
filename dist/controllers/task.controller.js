import taskService from "../services/task.service.js";
import { AppError } from "../errors/AppError.js";
import { taskSchema, updateTaskSchema } from "../schemas/task.schema.js";
async function getTasks(req, res) {
    const tasks = await taskService.getTasksService();
    res.json({
        tasks: tasks
    });
}
async function getTaskById(req, res) {
    const id = Number(req.params.id);
    if (Number.isInteger(id) && id > 0) {
        const task = await taskService.getTaskByIdService(id);
        return res.json({
            task: task
        });
    }
    throw new AppError(404, "Invalid Task ID");
}
async function createTask(req, res) {
    const result = taskSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: "Invalid task data",
            errors: result.error.issues
        });
    }
    const task = await taskService.createTaskService(result.data.title);
    return res.status(201).json({
        task: task
    });
}
async function updateTask(req, res) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
        throw new AppError(400, "Invalid Task ID");
    }
    const result = updateTaskSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: "Invalid Task Data",
            error: result.error.issues
        });
    }
    const task = await taskService.updateTaskService(id, result.data.title, result.data.completed);
    return res.status(200).json({
        task
    });
}
async function deleteTask(req, res) {
    const id = Number(req.params.id);
    if (Number.isInteger(id) && id > 0) {
        const task = await taskService.deleteTaskService(id);
        return res.status(204).send();
    }
}
export default {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
