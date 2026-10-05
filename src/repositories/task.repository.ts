import pool from "../config/database.js";
import type { Task } from "../types/task.js";

async function getTasksRepository(): Promise<Task[]> {
    const result = await pool.query(`SELECT * FROM tasks`);
    return result.rows;
}

async function getTasksByIdRepository(id: number): Promise<Task | undefined> {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
}

export default {
    getTasksRepository,
    getTasksByIdRepository
};