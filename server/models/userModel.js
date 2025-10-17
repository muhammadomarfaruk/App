import mongoose from "mongoose";

//crud schema

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})
const userModel=mongoose.model('Users',userSchema)

export default userModel;

