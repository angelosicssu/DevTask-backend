import pool from "../config/database.js";
import type { Task } from "../types/task.js";

async function getTasksRepository(): Promise<Task[]> {
    const result = await pool.query(`SELECT * FROM tasks ORDER BY id ASC`);
    return result.rows;
}

async function getTaskByIdRepository(id: number): Promise<Task | undefined> {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
}

async function createTaskRepository(title: string): Promise<Task> {
    const result = await pool.query('INSERT INTO tasks (title) VALUES ($1) RETURNING *', [title]);
    return result.rows[0];
}

async function updateTaskRepository(id: number, title: string, completed: boolean): Promise<Task> {
    const result = await pool.query('UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *', [title, completed, id]);
    return result.rows[0];
}

async function deleteTaskRepository(id: number): Promise<Task | undefined> {
    const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
}

export default {
    getTasksRepository,
    getTaskByIdRepository,
    createTaskRepository,
    updateTaskRepository,
    deleteTaskRepository
};