import { Router } from "express";
import {
    createIncome, 
    getAllIncomes, 
    getIncomeById, 
    updateIncome, 
    deleteIncome
} from "../controllers/income.controller.js"

const router = Router();

router.post("/create", createIncome);
router.get("/getAll", getAllIncomes);
router.get("/getById/:id", getIncomeById);
router.put("/update/:id", updateIncome);
router.delete("/delete/:id", deleteIncome);

export default router;


