import pool from "../config/database.js";

async function getTasksRepository() {
    const result = await pool.query(`SELECT * FROM tasks`);
    return result.rows;
}

export default {
    getTasksRepository
};