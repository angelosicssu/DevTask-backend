import type { Request, Response } from "express";
import taskService from "../services/task.service.js";

async function getTasks(req: Request, res: Response) {
    const tasks = await taskService.getTasksService();
    res.json({
        tasks: tasks
    });
}

export default {
    getTasks
}