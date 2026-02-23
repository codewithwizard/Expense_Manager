import mongoose, { Schema } from "mongoose";

const incomeSchema = new mongoose.Schema({
    incomeId : {
        type : Number,
        required : true,
        unique : true
    },
    incomeDate : {
        type : Date,
    },
    categoryId : {
        type : Number
    },
    subcategoryId : {
        type : Number
    },
    peopleId : {
        type : Number
    },
    projectId : {
        type : Number
    },
    amount : {
        type : Number,
        required : true
    },
    incomeDetail : {
        type : String
    },
    attachmentPath : {
        type : String
    },
    description : {
        type : String
    },
    userId : {
        type : Number
    }

},{
    timestamps : true
}) 

export const Income = mongoose.model("Income", incomeSchema)