import type { Request, Response } from "express";
import { getTasksByIdService, getTasksService } from "../services/task.service.js";

export function getTasks(req: Request, res: Response) {
    const allTasks = getTasksService();
    res.json({
        allTasks
    });
}

export function getTasksById(req: Request, res: Response) {
    const task = getTasksByIdService(Number(req.params.id));
    res.json({
        task: task
    })
}