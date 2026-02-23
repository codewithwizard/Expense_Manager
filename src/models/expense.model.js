import mongoose, { Schema } from "mongoose";

const expenseSchema = new mongoose.Schema({
    expenseId : {
        type : Number,
        required : true,
        unique : true
    },
    expenseDate : {
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
    expenseDetail : {
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
    timestaps : true
}) 

export const Expense = mongoose.model("Expense",expenseSchema)