
//HlrV9GSgForAmNHq  
import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://abhi2050063:HlrV9GSgForAmNHq@cluster0.cewj5.mongodb.net/blog-app');
    console.log("DB connected");
}














