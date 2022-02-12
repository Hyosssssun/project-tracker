import { pool } from "../index.js"

async function updateTable(){
    const updated = await pool.query(
        `INSERT INTO projects 
        VALUES (1, 0, 0, 'example: tribute page(pre-course for SoC)', false)
        RETURNING *;`
    );
    console.table(updated.rows);
    return updated.rows
}

updateTable()