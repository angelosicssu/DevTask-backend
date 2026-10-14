import pool from "../config/database.js";
async function getTasksRepository() {
    const result = await pool.query(`SELECT * FROM tasks ORDER BY id ASC`);
    return result.rows;
}
async function getTaskByIdRepository(id) {
    const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
    return result.rows[0];
}
async function createTaskRepository(title) {
    const result = await pool.query('INSERT INTO tasks (title) VALUES ($1) RETURNING *', [title]);
    return result.rows[0];
}
async function updateTaskRepository(id, title, completed) {
    const result = await pool.query('UPDATE tasks SET title = $1, completed = $2 WHERE id = $3 RETURNING *', [title, completed, id]);
    return result.rows[0];
}
async function deleteTaskRepository(id) {
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
