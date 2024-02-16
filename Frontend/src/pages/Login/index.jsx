import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import axios from "../../utils/axiosinstance"
import ReCAPTCHA from "react-google-recaptcha"
import "./login.css"


const Login=()=>{
    const navigate=useNavigate()

    const [data,setData]=useState({username:"",password:""})
    const [captcha,setCaptcha]=useState(false)



    const onChange=(e,key)=>{
  setData({...data,[key]:e.target.value})
    }
    const loginUser=async()=>{
        try{
        const response= await axios.post("/login",data)
        const tokenDecode=jwtDecode(response.data.token)
     
     localStorage.setItem("token",response.data.token)
     localStorage.setItem("user_id",tokenDecode.id)
     if(response.data.token && tokenDecode.id){
        navigate("/")
     }
        }
        catch(e){
            console.log(e.message)
        }
    }
    const onClick=()=>{
        if(captcha){
     loginUser()
        }
    }
    const onCaptchaChange = (value) => {
        setCaptcha(true);
      };

return (
    <div className="main">
        <div className="header">
            <h1>LOGIN</h1>
        </div>
        <div className="form">
<label >Username:</label>
        <input type="text" onChange={(e)=>onChange(e,"username")} />
       
        <label >Password</label>
        <input type="password" onChange={(e)=>onChange(e,"password")}/>
        <ReCAPTCHA sitekey="6Lc8OTkpAAAAADzzA1nSNWGMOb4h6aYpFZ67FqbE" onChange={onCaptchaChange}/>
        <button onClick={onClick}>Login</button>
        </div>
    </div>
)
}


export default Login