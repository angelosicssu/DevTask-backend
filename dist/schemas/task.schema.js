import * as z from "zod";
export const taskSchema = z.object({
    title: z.string().trim().min(1).max(255)
});
export const updateTaskSchema = z.object({
    title: z.string().trim().min(1).max(255),
    completed: z.boolean()
});
