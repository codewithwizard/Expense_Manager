import mongoose, { Schema } from "mongoose";

const expenseSchema = new mongoose.Schema({
    expenseDate: {
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
    expenseDetail: {
        type: String
    },
    attachmentPath: {
        type: String
    },
    description: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }

},
{
    timestamps: true
}) 

export const Expense = mongoose.model("Expense",expenseSchema)