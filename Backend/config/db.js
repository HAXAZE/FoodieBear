import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("DB Connected"))
        .catch(error => console.error("DB Connection Error:", error));
}

export { connectDB }; 
