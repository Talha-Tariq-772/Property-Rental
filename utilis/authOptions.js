

import GoogleProvider from "next-auth/providers/google"
import connectDB from "../config/database"
import User from "../models/User"
export const authOptions={
providers:[
    GoogleProvider({
        clientId:process.env.GOOGLE_CLIENT_ID,
        clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        authorization:{
            params:{
                prompt:'consent',
                access_type:'offline',
                response_type:'code'

            }
        }
    })
],

callbacks:{
    //invoked on sucessfull signIn
    async signIn({profile}){
    // connect to Db 
    await connectDB();
    // check if user exists
    const userExists = await User.findOne({email:profile.email});
    //if user does not exists , create user
    if(!userExists){
        // Truncate the user name if too long
        const username=  profile.name.slice(0,20);
        await User.create({
            email: profile.email,
            username,
            image:profile.picture
        });
}

    //return to allow signIn 
    return true;

    } ,
//session call back function that modifies the session object
 async session({session}){
    // get user from DB
    const user =await User.findOne({email: session.user.email})
    // assign ID from session
    session.user.id=user._id.toString();
    //return session
    return session;


    } 


}

}


