import asyncHandler from "../utils/asyncHandler.js";
import handleApiError from "../utils/handleApiError.js";
import handleApiResponse from "../utils/handleApiResponse.js";
import { Expense } from "../models/expense.model.js";

// Create Expense
const createExpense = asyncHandler(async (req, res) => {
    const { expenseDate, categoryId, subcategoryId, peopleId, projectId, amount, expenseDetail, attachmentPath, description, userId } = req.body;

    // Validate required fields
    if (!amount || !userId) {
        throw new handleApiError(400, "amount and userId are required");
    }

    const expense = await Expense.create({
        expenseDate,
        categoryId,
        subcategoryId,
        peopleId,
        projectId,
        amount,
        expenseDetail,
        attachmentPath,
        description,
        userId
    });

    if (!expense) {
        throw new handleApiError(500, "Something went wrong while creating expense");
    }

    return res.status(201).json(
        new handleApiResponse(201, expense, "Expense created successfully")
    );
});

// Get all expenses
const getAllExpenses = asyncHandler(async (req, res) => {
    const expenses = await Expense.find();

    if (!expenses) {
        throw new handleApiError(500, "Something went wrong while fetching expenses");
    }

    return res.status(200).json(
        new handleApiResponse(200, expenses, "Expenses fetched successfully")
    );
});

// Get expense by ID
const getExpenseById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const expense = await Expense.findById(id);

    if (!expense) {
        throw new handleApiError(404, "Expense not found");
    }

    return res.status(200).json(
        new handleApiResponse(200, expense, "Expense fetched successfully")
    );
});

// Update expense
const updateExpense = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { expenseDate, categoryId, subcategoryId, peopleId, projectId, amount, expenseDetail, attachmentPath, description } = req.body;

    const expense = await Expense.findByIdAndUpdate(
        id,
        {
            expenseDate,
            categoryId,
            subcategoryId,
            peopleId,
            projectId,
            amount,
            expenseDetail,
            attachmentPath,
            description
        },
        { new: true }
    );

    if (!expense) {
        throw new handleApiError(404, "Expense not found");
    }

    return res.status(200).json(
        new handleApiResponse(200, expense, "Expense updated successfully")
    );
});

// Delete expense
const deleteExpense = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const expense = await Expense.findByIdAndDelete(id);

    if (!expense) {
        throw new handleApiError(404, "Expense not found");
    }

    return res.status(200).json(
        new handleApiResponse(200, expense, "Expense deleted successfully")
    );
});

export { createExpense, getAllExpenses, getExpenseById, updateExpense, deleteExpense };
