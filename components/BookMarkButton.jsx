'use client';
import bookmarkProperty from"../app/actions/bookmarkProperty"
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import checkBookmarkStatus from "../app/actions/checkBookmarkStatus"

const BookMarkButtons = ({property}) => {
  const [isBookMarked, setIsBookMarked]=useState(false);
  const[loading , setLoading]=useState(false);
  const {data:session}=useSession();
const userId= session?.user?.id;

useEffect(() => {
  if(!userId){

  setLoading(false)
    return ;
  }
  checkBookmarkStatus(property._id).then((res)=>{
    if(res.error) return toast.error(res.error);
    if(res.isBookMarked) setIsBookMarked(res.isBookMarked)
    setLoading(false)
  })
}, [property._id,userId,checkBookmarkStatus]);
  const handleClick =async()=>{
  if(!userId){
    toast.error("you need to signed In to bookmark a listing!")
  }
  bookmarkProperty(property._id).then((res)=>{
    if(res.error) return toast.error(res.error);
    setIsBookMarked(res.isBookMarked);
    return toast.success(res.message);
  


  })
  }
    if(loading){
      return <p className="text-center">Loading..</p>  
    }
    return  isBookMarked?(<button
              className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center" 
              onClick={handleClick}
            >
              <FaBookmark className="mr-2"/>Remove Bookmark
            </button>):(
      <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center" 
              onClick={handleClick}
            >
              <FaBookmark className="mr-2"/> Bookmark Property
            </button>);
}
  
export default BookMarkButtons;