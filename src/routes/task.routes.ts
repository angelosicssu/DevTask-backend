import { Router } from "express";
import taskController from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.get("/", taskController.getTasks);
taskRouter.get("/:id", taskController.getTasksById);

export default taskRouter;