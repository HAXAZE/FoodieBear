import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sahilkr1228:B9NgUTeVvx7wtgkr@cluster0.ieakhxg.mongodb.net/Food_del').then(()=> console.log("DB Connected"));
}