import mongoose, { Schema } from "mongoose";

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
        unique: true
    },
    projectStartDate: {
        type: Date,
        required: true
    },
    projectEndDate: {
        type: Date,
        required: true
    },
    projectDetail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    isActive: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
})

export const Project = mongoose.model("Project", projectSchema)