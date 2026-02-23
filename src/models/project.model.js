import mongoose, { Schema } from "mongoose";

const projectSchema = new mongoose.Schema({
    projectId : {
        type : Number,
        required : true,
        unique : true
    },
    projectName : {
        type : String,
        required : true,
        unique : true
    },
    projectStartDate : {
        type : Date,
        required : true
    },
    projectEndDate : {
        type : Date,
        required : true
    },
    projectDetail : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    userId : {
        type: Number
    },
    isActive : {
        type : Boolean,
        default : true
    }
},
{
    timestamps : true
})

export const Project = mongoose.model("Project", projectSchema)