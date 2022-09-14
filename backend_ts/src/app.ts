import express from "express";
import blogRoute from "./Routes/Blogroute"
import connection from "./db/config";
import cors from "cors";
const app=express()
const PORT=2000;
app.use(cors())
app.use(express.json())
app.use("/blogs",blogRoute)

app.get("/",(req,res)=>{
    res.send("hi  man")
})

connection.sync().then(()=>{
    console.log("db synced succesfully")
}).catch((err)=>{
    console.log(err)
})
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

