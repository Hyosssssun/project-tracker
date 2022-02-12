import { pool } from "../index.js";

async function createTable() {
    const created = await pool.query(
        `CREATE TABLE IF NOT EXISTS projects (
            projectId SERIAL PRIMARY KEY,
            week INTEGER,
            day INTEGER,
            projectName TEXT NOT NULL,
            team BOOLEAN NOT NULL
        );`
    );
    console.log("project table created", created.command);
}

try {
    await createTable();
} catch (err) {
    console.error(err);
} finally {
    await pool.end();
}
