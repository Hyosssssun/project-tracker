import { pool } from "../db/index.js";

export async function getAllProjects(){
    // const data = await pool.query(
    //     `SELECT projects.projectId, projects.team, projects.week, projects.day, projects.projectName, urls.url FROM projects INNER JOIN urls ON urls.projectName=projects.projectName;`
    // );
    const data = await pool.query(`SELECT * FROM projects;`);
    console.table("Here is your project list", data.rows);
    return data.rows;
}

export async function getProjectById(projectId){
    // const data = await pool.query(
    //     `SELECT projects.projectId, projects.team, projects.week, projects.day, projects.projectName, urls.url FROM projects INNER JOIN urls ON urls.projectName=projects.projectName;`
    // );
    const data = await pool.query(
        `SELECT * FROM projects WHERE projectId = $1;`, [projectId]
    );
    console.table("Here is your project list", data.rows);
    return data.rows;
}

export async function createProject(team, week, day, projectName, url) {
    const addProject = await pool.query(
        `INSERT INTO projects (team, week, day, projectName, url) VALUES($1, $2, $3, $4, $5) RETURNING *;`,
        [team, week, day, projectName, url]
    );
    return addProject.rows;
}

export async function updateProject(projectId, team, week, day, projectName, url){
    const updated = await pool.query(
        `UPDATE projects SET team = $2, week = $3, day=$4, projectName = $5, url = $6 WHERE projectId = $1 RETURNING *;`,
        [projectId, team, week, day, projectName, url]
    );
    return updated.rows;
}

export async function deleteProject(projectId){
    const updated = await pool.query(
        `DELETE FROM projects WHERE projectId = $1 RETURNING *;`,
        [projectId]
    );
    return updated.rows;
}

