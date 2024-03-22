import mongoose from 'mongoose'

const Schema = mongoose.Schema

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    tags:[{
        type:String,
        enum:['Culture' , 'Music' , 'Travel' , 'Love' , 'Food' , 'Creativity'],
        required:true
    }],
    content:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    ratings:[{
        type:mongoose.Types.ObjectId,   
        ref:'Rating'
    }],
    avgRating:{
        type:Number
    }
  
}, {timestamps:true})


export default mongoose.model('Blog',blogSchema)