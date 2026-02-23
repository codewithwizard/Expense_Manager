import { Router } from "express";
import { 
    createExpense, 
    getAllExpenses, 
    getExpenseById, 
    updateExpense, 
    deleteExpense 
} from "../controllers/expense.controller.js";

const router = Router();

router.post("/create", createExpense);

router.get("/getAll", getAllExpenses);

router.get("/getById/:id", getExpenseById);

router.put("/update/:id", updateExpense);

router.delete("/delete/:id", deleteExpense);

export default router;
