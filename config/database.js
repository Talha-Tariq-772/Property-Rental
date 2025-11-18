import mongoose from "mongoose";

let connected=false;
 const connectDB= async()=>{
    mongoose.set('strictQuery', true);

    /// if  mongoDB is connected , don't connect again

    if(connected){
        console.log("MongoDB is connected !")
        return;
    }

    try {
        // connect with DB
       await mongoose.connect(process.env.MONGODB_URI);
       connected=true;
       
    } catch (error) {

        console.log( "DB is not connected",error)
        
    }


 }

 export default connectDB;