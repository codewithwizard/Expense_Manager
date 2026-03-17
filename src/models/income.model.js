import mongoose, { Schema } from "mongoose";

const incomeSchema = new mongoose.Schema({
    incomeDate: {
        type: Date,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    subcategoryId: {
        type: Schema.Types.ObjectId,
        ref: "Subcategory"
    },
    peopleId: {
        type: Schema.Types.ObjectId,
        ref: "People"
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: "Project"
    },
    amount: {
        type: Number,
        required: true
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
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

},{
    timestamps: true
}) 

export const Income = mongoose.model("Income", incomeSchema)