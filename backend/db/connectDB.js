import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async (req,res) =>{
    try {
        const connetion = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${connetion.connection.host}`)
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;