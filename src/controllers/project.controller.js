import { Project } from "../models/project.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import handleApiError from "../utils/handleApiError.js";
import handleApiResponse from "../utils/handleApiResponse.js";

//create project
const createProject = asyncHandler(async (req, res) => {
    const { projectName, projectStartDate, projectEndDate, isActive, description, projectDetail, userId } = req.body;

    if (!projectName || !projectStartDate || !projectEndDate || !description) {
        throw new handleApiError(400, "projectName, projectStartDate, endDate and description are required")
    }

    const project = await Project.create({
        projectName,
        projectStartDate,
        projectEndDate,
        isActive,
        description,
        projectDetail,
        userId
    })

    if (!project) {
        throw new handleApiError(500, "Something went wrong while creating project")
    }

    return res.status(200).json(
        new handleApiResponse(200, project, "Project created successfully")
    )
});

// getAll project
const getAllProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find()

    if (!projects) {
        throw new handleApiError(500, "Something went wrong while fetching projects")
    }

    return res.status(200).json(
        new handleApiResponse(200, projects, "Projects fetched successfully")
    )
});

// getByID project
const getById = asyncHandler(async (req, res) => {
    const { id } = req.params
    const project = await Project.findById(id);
        

    if (!project) {
        throw new handleApiError(404, "Project not found")
    }

    return res.status(200).json(
        new handleApiResponse(200, project, "Project fetched successfully")
    )
});

// update project
const updateProject = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { projectName, projectStartDate, projectEndDate, isActive,projectDetail, description } = req.body;    

    const project = await Project.findByIdAndUpdate(id, {
        projectName,
        projectStartDate,
        projectEndDate,
        isActive,
        description,
        projectDetail
    }, { new: true })
    
    if (!project) {
        throw new handleApiError(404, "Project not found")
    }

    return res.status(200).json(
        new handleApiResponse(200, project, "Project updated successfully")
    )   
});

// delete project
const deleteProject = asyncHandler(async (req, res) => {
    const { id } = req.params
    const project = await Project.findByIdAndDelete(id)

    if (!project) {
        throw new handleApiError(404, "Project not found")
    }
    
    return res.status(200).json(
        new handleApiResponse(200, project, "Project deleted successfully")
    )
});

export { createProject, getAllProjects, getById, updateProject, deleteProject }