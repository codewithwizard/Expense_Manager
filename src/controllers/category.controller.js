import { Category } from "../models/category.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import handleApiError from "../utils/handleApiError.js";
import handleApiResponse from "../utils/handleApiResponse.js";


//create category
const createCategory = asyncHandler(async (req, res) => {
    const { categoryname, isExpense, isIncome, isActive, description, userId } = req.body;

    if (!categoryname || !description) {
        throw new handleApiError(400, "categoryname and description are required")
    }

    const category = await Category.create({
        categoryname,
        isExpense,
        isIncome,
        isActive,
        description,
        userId
    })

    if (!category) {
        throw new handleApiError(500, "Something went wrong while creating category")
    }

    return res.status(200).json(
        new handleApiResponse(200, category, "Category created successfully")
    )
});

// getAll category
const getAllCategories = asyncHandler(async (req, res) => {

    const categories = await Category.find()

    if(!categories) {
        throw new handleApiError(500, "Something went wrong while fetching categories")
    }

    return res.status(200).json(
        new handleApiResponse(200, categories, "Categories fetched successfully")
    )

});

// getByID category
const getById = asyncHandler(async (req, res) => {
    const { id } = req.params
    const category = await Category.findById(id);

    if (!category) {
        throw new handleApiError(404, "Category not found")
    }   

    return res.status(200).json(
        new handleApiResponse(200, category, "Category fetched successfully")
    )

});


// update category
const updateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { categoryname, isExpense, isIncome, isActive, description, userId } = req.body;  

    const category = await Category.findByIdAndUpdate(
        id,
        {
            categoryname,
            isExpense,
            isIncome,
            isActive,
            description,
            userId
        },
        { new: true }
    )

    if (!category) {
        throw new handleApiError(500, "Something went wrong while updating category")
    }

    return res.status(200).json(
        new handleApiResponse(200, category, "Category updated successfully")
    )
});

// delete category
const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    const category = await Category.findByIdAndDelete(id);
    
    if (!category) {
        throw new handleApiError(500, "Something went wrong while deleting category")
    }

    return res.status(200).json(
        new handleApiResponse(200, category, "Category deleted successfully")
    )
}); 

export { createCategory, getAllCategories, getById, updateCategory, deleteCategory };