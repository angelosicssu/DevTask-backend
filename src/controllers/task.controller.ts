import type { Request, Response } from "express";
import taskService from "../services/task.service.js";

async function getTasks(req: Request, res: Response) {
    const tasks = await taskService.getTasksService();
    res.json({
        tasks: tasks
    });
}

async function getTaskById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const task = await taskService.getTaskByIdService(id);
    res.json({
        task: task
    });
}

export default {
    getTasks,
    getTaskById
}