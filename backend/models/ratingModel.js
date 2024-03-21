import mongoose from "mongoose";
const Schema = mongoose.Schema

const ratingSchema = new Schema({
    ratingNumber:{
        type:Number,
        default:1
    },
    comment:{
        type:String,
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
} , {timestamps:true})

export default mongoose.model('Rating', ratingSchema)