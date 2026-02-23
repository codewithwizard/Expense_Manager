import asyncHandler from "../utils/asyncHandler.js";
import { Income } from "../models/income.model.js"
import handleApiError from "../utils/handleApiError.js";
import handleApiResponse from "../utils/handleApiResponse.js";

const createIncome = asyncHandler(async (req, res) => {
    const { incomeDate, categoryId, subcategoryId, peopleId, projectId, amount, incomeDetail, attachmentPath, description, userId } = req.body

    if (!amount || !userId) {
        throw new handleApiError(400, "amount, and userId are required");
    }

    const lastIncome = await Income.findOne().sort({ incomeId: -1 })
    const newIncomeId = lastIncome ? lastIncome.incomeId + 1 : 1
    // if document exist then add +1 , if not then take 1

    const income = await Income.create({
        incomeId: newIncomeId,
        incomeDate,
        categoryId,
        subcategoryId,
        peopleId,
        projectId,
        amount,
        incomeDetail,
        attachmentPath,
        description,
        userId
    });

    if (!income) {
        throw new handleApiError(500, "Something went wrong while creating income")
    }

    return res.status(201).json(
        new handleApiResponse(201, income, "Income created successfullt")
    );
});

//get all income

const getAllIncomes = asyncHandler(async (req, res) => {
    const incomes = await Income.find();

        if(!incomes){
            throw new handleApiError(500, "Something went wrong while fetching incomes")
        }

        return res.status(200).json(
            new handleApiResponse(200, incomes, "Incomes fetched successfully")
        );
});

// get income by ID

const getIncomeById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const income = await Income.findOne({incomeId: id});

        if(!income){
            throw new handleApiError(404, "Income not fetched")
        }

        return res.status(200).json(
            new handleApiResponse(200, income, "Income fetched")
        );
});

// Update Income
const updateIncome = asyncHandler(async (req, res) => {
        const { id } = req.params;
        const { incomeDate, categoryId, subcategoryId, peopleId, projectId, amount, incomeDetail, attachmentPath, description } = req.body;

        const income = await Income.findOneAndUpdate({incomeId: id},
            {
                incomeDate,
                categoryId,
                subcategoryId,
                peopleId,
                projectId,
                amount,
                incomeDetail,
                attachmentPath,
                description
            },
            { new : true }
        );

        if(!income){
            throw new handleApiError(404, "Incoome not found")
        }

        return res.status(200).json(
            new handleApiResponse(200, income, "Income Updated Successfully")
        );
});

// Delete income

const deleteIncome = asyncHandler(async (req,res) => {
    const { id } = req.params

    const income = await Income.findOneAndDelete({incomeId: id});

    if(!income){
        throw new handleApiError(404, "Income not found")
    }

    return res.status(200).json(
        new handleApiResponse(200, income, "Income deleted successfully")
    );
});

export {createIncome, getAllIncomes, getIncomeById, updateIncome, deleteIncome };


