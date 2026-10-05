import { Router } from "express";
import taskController from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.get("/", taskController.getTasks);

export default taskRouter;