let express=require("express")
const { getdata, adddata, getbyid } = require("../controlers/usercon")
let route=new express.Router()
route.get("/data",getdata)
route.post("/add",adddata)
route.get("/getbyid/:id",getbyid)
module.exports=route