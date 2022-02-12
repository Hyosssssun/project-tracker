import express from "express";
import { getAllProject } from "../models/projects.js";
const router = express.Router();


/* GET whole project list. */
router.get("/projects", async function (req, res) {
  const allProjects = await getAllProject();
  res.json({ success: true, message: "here is all of your projects", payload: allProjects });
  console.log(allProjects)
});

export default router;
