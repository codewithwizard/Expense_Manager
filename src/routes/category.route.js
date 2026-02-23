import { Router } from "express";

import { createCategory, getAllCategories, getById, updateCategory, deleteCategory } from "../controllers/category.controller.js";

const router = Router();

router.post("/create", createCategory);
router.get("/getAll", getAllCategories);
router.get("/getById/:id", getById);
router.put("/update/:id", updateCategory);
router.delete("/delete/:id", deleteCategory);

export default router;
