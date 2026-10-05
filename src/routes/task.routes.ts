import { Router } from "express";
import getTasks from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.get("/", getTasks);

export default taskRouter;