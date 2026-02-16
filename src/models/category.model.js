import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
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
    Description: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref : "User"
    }
},
{
    timestamps : true
})

export const Category = mongoose.model("Category", categorySchema);