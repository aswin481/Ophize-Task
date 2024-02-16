import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "../../utils/axiosinstance"


import "./signup.css"


const Signup=()=>{
   
    const navigate=useNavigate()

    const [data,setData]=useState({username:"",email:"",password:"",confirmpassword:""})



    const onChange=(e,key)=>{
  setData({...data,[key]:e.target.value})
    }

    const onClick=async()=>{
       try{
       
         await axios.post("/signup",data)
        
         navigate("/login")
       }
       catch(e){
        console.log(e.message)
       }
    }

    console.log(data)
return (
    <div className="main">
        <div className="header">
            <h1>SIGNUP</h1>
        </div>
        <div className="form">
         <label >Username:</label>
        <input type="text"  onChange={(e)=>onChange(e,"username")}/>
        <label >Email:</label>
        <input type="email" onChange={(e)=>onChange(e,"email")}/>
       
        <label >Password:</label>
        <input type="password" onChange={(e)=>onChange(e,"password")}/>
        <label >Confirm Password:</label>
        <input type="password" onChange={(e)=>onChange(e,"confirmpassword")}/>
      
        <button className="button" onClick={onClick}>Sigup</button>
        </div>
        
        </div>
       
    
)
}


export default Signup