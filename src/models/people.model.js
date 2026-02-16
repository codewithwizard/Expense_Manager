import mongoose, { Schema } from "mongoose";

const peopleSchema = new mongoose.Schema({
    PeopleName : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    mobile : {
        type : Number,
        required : true,
        trim : true,
        unique : true
    },
    userId : {
        type : Schema.Types.ObjectId,
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

export const People = mongoose.model("People", peopleSchema)