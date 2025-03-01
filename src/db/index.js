import mongoose from "mongoose";
import{DB_NAME} from "../constant.js"

const connectDB =async()=>{
    try{
        console.log("MongoDB URI:", process.env.MONGODB_URI);
        console.log("MongoDB DB_NAME:", process.env.DB_NAME);        
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected:${connectionInstance.connection.host}`)
    }catch (error){
        console.error("Mongodb connection error ",error)
        // throw error
        process.exit(1);

    }
}

export default connectDB;