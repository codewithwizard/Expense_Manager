import { Schema } from "mongoose";
import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subcategoryname: {
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
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    sequence: {
        type: Number
    }
}, {
    timestamps: true
})

export const Subcategory = mongoose.model("Subcategory", subCategorySchema)