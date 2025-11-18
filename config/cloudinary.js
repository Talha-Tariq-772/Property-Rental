import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY, // Added process.env
  api_secret: process.env.CLOUDINARY_API_SECRET, // Added process.env
});

export default cloudinary;