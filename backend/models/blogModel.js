import mongoose from 'mongoose'

const Schema = mongoose.Schema

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    tags:[{
        type:String,
        enum:['Culture' , 'Music' , 'Travel' , 'Love' , 'Food' , 'Creativity']
    }],
    content:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
  
}, {timestamps:true})


export default mongoose.model('Blog',blogSchema)