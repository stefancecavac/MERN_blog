import mongoose from "mongoose";
const Schema = mongoose.Schema

const ratingSchema = new Schema({
    ratingNumber:{
        type:Number
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
} , {timestamps:true})

export default mongoose.model('Rating', ratingSchema)