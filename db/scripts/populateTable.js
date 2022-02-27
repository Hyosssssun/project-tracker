import { pool } from "../index.js"

async function populateTable(){
    const projectsTable = await pool.query(
        `INSERT INTO projects (team, week, day, projectName, url, projectStatus)
        VALUES (false, 0, 0, 'tribute page(pre-course)', 'https://stoic-franklin-8fc26d.netlify.app/', 'Done')
        RETURNING *;`
    );
    console.log(
        'projects table populated with command of ',
        projectsTable.command
    );
    console.table(projectsTable.rows);
}
populateTable()