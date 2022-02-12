import { pool } from "../db/index.js";

export async function getAllProject(){
    const data = await pool.query(`SELECT * FROM projects;`);
    console.table("The project list is ", data.rows);
    return data.rows;
}