import { jwtDecode } from "jwt-decode"
import { Navigate } from "react-router-dom"

const CheckUserAuth=(props)=>{
    
    const token=localStorage.getItem("token")
    
    if(token){
         const {role}= jwtDecode(token)
         if(role=="USER"){
    return<> {props.children}</>
         }
         else  return <Navigate to="/login"/>
    }
    else return <Navigate to="/login"/>
        

}

export default CheckUserAuth