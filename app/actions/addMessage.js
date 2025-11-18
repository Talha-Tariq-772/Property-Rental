"use server";

import connectDB from "../../config/database";
import Message from "../../models/Message";
import {getSessionUser} from "../../utilis/getSessionUser"



async function addMessage(previousState,formData){
    await connectDB();
    const sessionUser= await getSessionUser();
    if(!sessionUser || !sessionUser.userId){
        throw new Error("User Id is required!");
    }
    const {userId} = sessionUser;
    const recipient=formData.get('recipient');
    if(userId.toString()===recipient.toString()){
        return{error:("You cannot send message to yourself!")};
    }
    const newMessage=new Message({
        sender:userId,
        recipient:recipient,
        property:formData.get('property'),
        name:formData.get('name'),
        email:formData.get('email'),
        phone:formData.get('phone'),
        body:formData.get('body')
    });
   await newMessage.save();
   return {success:true};
}
export default addMessage;