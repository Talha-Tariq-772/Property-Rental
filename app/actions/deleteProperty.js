'use server';
import cloudinary from "../../config/cloudinary";
import connectDB from "../../config/database";
import Property from "../../models/Property";
import { getSessionUser } from "../../utilis/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteProperty(propertyId){
 const sessionUser = await getSessionUser();
 if(!sessionUser||!sessionUser.userId){
    throw new Error("User ID is required!");
 }

 const {userId}=sessionUser;

 const property = await Property.findById(propertyId);
 if(!property) throw new Error("Property Not Found!");

 if(property.owner.toString()!==userId){
  throw new Error ("Unauthorized!")
 }

   //Extract public ID's from image URLs
  const publicIds = property.images.map((imageUrls)=>{
   const parts =imageUrls.split('/');
   return parts.at(-1).split('.').at(0);
  })

  //Deleting Images from cloudinary 
  if(publicIds.length > 0){
   for(let publicId of publicIds){
    await cloudinary.uploader.destroy('Property-Rental/'+ publicId)
   }
  }
  await property.deleteOne();
  revalidatePath('/', 'layout');



 
}

export default deleteProperty
