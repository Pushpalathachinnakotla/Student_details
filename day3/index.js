let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
const route=require("./routes/userroutes")
let app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/userdbpushpa").then(()=>{
    console.log("db conn ok")
}).catch((err)=>{console.log(err)})
app.use("/",route)
app.listen(5000,()=>{
    console.log("server conn okk")
})