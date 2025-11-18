"use server"
import connectDB from "../../config/database";
import User from "../../models/User";
import { revalidatePath } from "next/cache";

import { getSessionUser } from "../../utilis/getSessionUser";

const bookmarkProperty =async(propertyId) => {
    await connectDB();
    const sessionUser=await getSessionUser();
if(!sessionUser || !sessionUser.userId){
    throw new Error("User Id is required!");
}
const {userId} = sessionUser;
const user = await User.findById(userId);
let isBookMarked= user.bookmarks.includes(propertyId);
let message;
if(isBookMarked){
    // if this property is already in bookmarked by user , then remove it
    user.bookmarks.pull(propertyId);
    message="BookMark Removed!";
    isBookMarked=false;
}
  else{
      // if this property is not bookmarked by user , then add it
    user.bookmarks.push(propertyId);
    message="BookMark Added!";
    isBookMarked=true;
}


   await user.save();
   revalidatePath('/properties/saves', 'page');
   return{
    message,
    isBookMarked 
   }
}
 
export default bookmarkProperty;