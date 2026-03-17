import  { People } from "../models/people.model.js"
import asyncHandler from "../utils/asyncHandler.js"
import handleApiError from "../utils/handleApiError.js"
import handleApiResponse from "../utils/handleApiResponse.js"


const createPeople = asyncHandler(async (req, res) => {
    const { peopleName, email, password, mobile, userId, isActive } = req.body;

    if (!peopleName || !email || !password || !mobile) {
        throw new handleApiError(400, "Name, email, password, mobile are required")
    }

    const people = await People.create({
        peopleName,
        email,
        password,
        mobile,
        userId,
        isActive
    })

    if (!people) {
        throw new handleApiError(500, "Something went wrong while creating people")
    }

    return res.status(200).json(
        new handleApiResponse(200, people, "People created successfully")
    )
});

// getAll people 
const getAllPeoples = asyncHandler(async (req, res) => {
    const peoples = await People.find()

    if (!peoples) {
        throw new handleApiError(500, "Something went wrong")
    }

    return res.status(200).json(
        new handleApiResponse(200, peoples, "Get all Peoples")
    )
});

// getByID people

const getById = asyncHandler(async (req, res) => {
    const { id } = req.params

    const people = await People.findById(id);

    if (!people) {
        throw new handleApiError(500, "Something went wrong while fetching")
    }

    return res.status(200).json(
        new handleApiResponse(200, people, "People fetched successfully")
    )
});

// Update people
const updatePeople = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { peopleName, email, password, mobile, userId, isActive } = req.body;

    const people = await People.findByIdAndUpdate(
        id,
        {
            peopleName,
            email,
            password,
            mobile,
            userId,
            isActive
        },
        {new : true}
    );

    if(!people){
        throw new handleApiError(500, "Something went wrong while Update")
    }

    return res.status(200).json(
        new handleApiResponse(200, people, "People Updated successfully")
    )
});

const deletePeople = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const people = await People.findByIdAndDelete(id);

    if(!people){
        throw new handleApiError(500, "Something ")
    }

    return res.status(200).json(
        new handleApiResponse(200, people, "People deleted successfully")
    )
});

export { createPeople, getAllPeoples, getById, updatePeople, deletePeople }