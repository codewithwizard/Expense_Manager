import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema({
    categoryId : {
        type : Number,
        required : true,
        unique : true
    },
    categoryname: {
        type: String,
        required: true,
        unique: true
    },
    isExpense: {
        type: Boolean,
        default: false
    },
    isIncome: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: Number
    }
},
{
    timestamps : true
})

export const Category = mongoose.model("Category", categorySchema);