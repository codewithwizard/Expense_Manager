import { Router } from "express";

const router = Router();

import { createPeople, getAllPeoples, getById, updatePeople, deletePeople } from "../controllers/people.controller.js";

router.post("/create", createPeople);
router.get("/getAll", getAllPeoples);
router.get("/getById/:id", getById);
router.put("/update/:id", updatePeople);
router.delete("/delete/:id", deletePeople);

export default router;