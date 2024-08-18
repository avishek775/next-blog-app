// import mongoose from "mongoose";

// const Schema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true
//     },
//     category:{
//         type:String,
//         required:true
//     },
//     author:{
//         type:String,
//         required:true
//     },
//     image:{
//         type:String,
//         required:true
//     },
//     authorImg:{
//         type:String,
//         required:true
//     },
//     date:{
//         type:Date,
//         default:Date.now()
        
//     },

// })
// const BlogModel = mongoose.models.blog || mongoose.model('blog',Schema);
// export default BlogModel;


import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    authorImg: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now // Corrected to use Date.now without parentheses
    }
});

// Make sure to capitalize the model name for consistency
const BlogModel = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default BlogModel;
