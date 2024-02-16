import express from "express"
import User from "../db/Schema/userSchema.js"
import jwt from "jsonwebtoken"
import bcrypt from"bcrypt"

const router=express.Router()


router.post("/signup",async(req,res)=>{
   
const data=req.body
   try{
   
   const user=await User.findOne({username:data.username})
   if(user){
    res.json({message:"Username already taken"})
    
   }
   if(data.password!= data.confirmpassword){
      return res.status(403).json({message:"Password dont match"})
   }
   const hashedPassword=await bcrypt.hash(data.password,2)
   data.password=hashedPassword

   await User.create(data)
   res.status(201).json({message:"User SignedUp Succesfully"})

} catch(e){
   res.status(500).json({error:e.message})
}
})


router.post("/login",async(req,res)=>{
   try{
       const body =req.body
       const user=await User.findOne({username:body.username})
      
       if(!user){
           res.status(401).json({message:"Username or Password Incorrect"})
       }
       const isMatching=await bcrypt.compare(body.password,user.password)
       if(!isMatching){
           res.status(401).json({message:"Username or Password Incorrect"})
       }

       const token=jwt.sign({id:user._id, role:'USER'},"uyuyfututdtesuytthjgghgyrdyrd@78",{expiresIn:"7d"})

       res.status(200).json({message:"Login Sucess",token:token,id:user._id})
   }
   catch(e){
       res.status(500).json({error:e.message})
   }
})


export default router