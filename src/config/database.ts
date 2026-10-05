import { Pool } from "pg";

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'devtask',
    user: 'devtask',
    password: 'devtask'
});

export default pool;