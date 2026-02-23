import Router from "express";

import { createSubcategory, getAllSubcategories, getById, updateSubcategory, deleteSubcategory } from "../controllers/subcategory.controller.js";

const router = Router();

router.post("/create", createSubcategory);
router.get("/getAll", getAllSubcategories);
router.get("/getById/:id", getById);
router.put("/update/:id", updateSubcategory);
router.delete("/delete/:id", deleteSubcategory);

export default router;
