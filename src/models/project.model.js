import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    ProjectName : {
        type : String,
        required : true,
        unique : true
    },
    ProjectStartDate : {
        type : Date,
        required : true
    },
    ProjectEndDate : {
        type : Date,
        required : true
    },
    ProjectDetail : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    userId : {
        type: Schema.Types.ObjectId,
        ref : "User"
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