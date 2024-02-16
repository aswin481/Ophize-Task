import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/task").then(()=>{
    console.log("connected")
})

export default mongoose