import { Project } from "../models/project.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import handleApiError from "../utils/handleApiError.js";
import handleApiResponse from "../utils/handleApiResponse.js";

//create project
const createProject = asyncHandler(async (req, res) => {
    const { projectName, startDate, endDate, isActive, description, userId } = req.body;

    if (!projectName || !startDate || !endDate || !description) {
        throw new handleApiError(400, "projectName, startDate, endDate and description are required")
    }

    // Auto-increment projectId
    const lastProject = await Project.findOne().sort({ projectId: -1 });
    const newProjectId = lastProject ? lastProject.projectId + 1 : 1;

    const project = await Project.create({
        projectId: newProjectId,
        projectName,
        startDate,
        endDate,
        isActive,
        description,
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
    const project = await Project.findOne({projectId: id});
        

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
    const { projectName, startDate, endDate, isActive, description } = req.body;    

    const project = await Project.findOneAndUpdate({projectId: id}, {
        projectName,
        startDate,
        endDate,
        isActive,
        description
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
    const project = await Project.findOneAndDelete({projectId: id})

    if (!project) {
        throw new handleApiError(404, "Project not found")
    }
    
    return res.status(200).json(
        new handleApiResponse(200, project, "Project deleted successfully")
    )
});

export { createProject, getAllProjects, getById, updateProject, deleteProject }