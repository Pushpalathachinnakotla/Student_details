let mongoose=require("mongoose")
let userschema=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "age":Number,
    "marks":Number,
    "emailid":String,
    "password":String
})
module.exports=mongoose.model("user",userschema)

