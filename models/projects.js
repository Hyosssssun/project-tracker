import { pool } from "../db/index.js";

export async function getAllProjects(){
    const data = await pool.query(`SELECT * FROM projects;`);
    return data.rows;
}

export async function getProjectById(projectId){
    const data = await pool.query(
        `SELECT * FROM projects WHERE projectId = $1;`, [projectId]
    );
    return data.rows;
}

export async function createProject(team, week, day, projectName, url, projectStatus) {
    const addProject = await pool.query(
        `INSERT INTO projects (team, week, day, projectName, url, projectStatus) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;`,
        [team, week, day, projectName, url, projectStatus]
    );
    return addProject.rows;
}

export async function updateProject(
    projectId,
    team,
    week,
    day,
    projectName,
    url,
    projectStatus
) {
    const updated = await pool.query(
        `UPDATE projects SET team = $2, week = $3, day=$4, projectName = $5, url = $6 projectStatus = $7 WHERE projectId = $1 RETURNING *;`,
        [projectId, team, week, day, projectName, url, projectStatus]
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

