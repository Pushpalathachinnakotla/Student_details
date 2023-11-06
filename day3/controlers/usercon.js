let userdetails=require("../models/usermodel")
let getdata=async(req,res)=>{
    let data=await userdetails.find()
    res.json(data)
}
let adddata=(req,res)=>{
    let data=new userdetails(req.body)
    data.save().then(()=>{
        res.send("document added")
    }).catch((err)=>{
        res.send(err)
    })
}
let getbyid=async(req,res)=>{
    let data=await userdetails.findById({"_id":req.params.id})
    res.json(data)
}
module.exports={getdata,adddata,getbyid}