import { Router } from "express";

import { createProject, getAllProjects, getById, updateProject, deleteProject } from "../controllers/project.controller.js";
const router = Router();

router.post("/create", createProject);
router.get("/getAll", getAllProjects);
router.get("/getById/:id", getById);
router.put("/update/:id", updateProject);
router.delete("/delete/:id", deleteProject);

export default router;
