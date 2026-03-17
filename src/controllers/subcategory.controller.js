import { Subcategory } from "../models/subcategory.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import handleApiError from "../utils/handleApiError.js";
import handleApiResponse from "../utils/handleApiResponse.js";

//create subcategory
const createSubcategory = asyncHandler(async (req, res) => {
    const { subcategoryname, categoryId, isActive, description, userId } = req.body;

    if (!subcategoryname || !categoryId || !description) {
        throw new handleApiError(400, "subcategoryname, categoryId and description are required")
    }

    const subcategory = await Subcategory.create({
        subcategoryname,    
        categoryId,
        isActive,
        description,
        userId
    })

    if(!subcategory) { 
        throw new handleApiError(500, "Something went wrong while creating subcategory")
    }

    return res.status(201).json(
        new handleApiResponse(201, subcategory, "Subcategory created successfully")
    )
});

// getAll subcategory

const getAllSubcategories = asyncHandler(async (req, res) => {
    const subcategories = await Subcategory.find()
    if(!subcategories) {
        throw new handleApiError(500, "Something went wrong while fetching subcategories")
    }

    return res.status(200).json(
        new handleApiResponse(200, subcategories, "Subcategories fetched successfully")
    )
});

// getByID subcategory
const getById = asyncHandler(async (req, res) => {
    const { id } = req.params
    const subcategory = await Subcategory.findById(id);    

    if (!subcategory) {
        throw new handleApiError(404, "Subcategory not found")
    }

    return res.status(200).json(
        new handleApiResponse(200, subcategory, "Subcategory fetched successfully")
    )
});

// update subcategory
const updateSubcategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { subcategoryname, categoryId, isActive, description, userId } = req.body;
    
    const subcategory = await Subcategory
        .findByIdAndUpdate(id, {
            subcategoryname,
            categoryId,
            isActive,
            description,
            userId
        }, { new: true });

    if (!subcategory) {
        throw new handleApiError(500, "Something went wrong while updating subcategory")
    }   

    return res.status(200).json(
        new handleApiResponse(200, subcategory, "Subcategory updated successfully")
    )
});

// delete subcategory
const deleteSubcategory = asyncHandler(async (req, res) => {
    const { id } = req.params
    const subcategory = await Subcategory.findByIdAndDelete(id);
    
    if (!subcategory) {
        throw new handleApiError(500, "Something went wrong while deleting subcategory")
    }

    return res.status(200).json(
        new handleApiResponse(200, subcategory, "Subcategory deleted successfully")
    )
});

export { createSubcategory, getAllSubcategories, getById, updateSubcategory, deleteSubcategory }