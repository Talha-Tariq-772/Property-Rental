import { Schema , model , models } from "mongoose";
import { ref } from "process";


const UserSchema =new Schema({
email:{
 type:String,
 required:[true, 'Email is requird!'],
 unique:[true , 'Email is already exits!']
}, 
username:{
 type:String,
 required:[true, 'Username is requird!']
},
image:{
 type:String
},
bookmarks:[
{
 type:Schema.Types.ObjectId,
  ref:'Property'
}
]
}
,{
 timestamps:true
});

const User = models.User || model('User', UserSchema);
export default User;
