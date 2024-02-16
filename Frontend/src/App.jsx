import Login from "./pages/Login"
import Signup from "./pages/signup"
import Home from "./pages/Home"
import { Route,Routes } from "react-router-dom"
import CheckUserAuth from "./Components/checkUserAuth"

import "./App.css"


const App=()=>{



  return (
    <div>
      <Routes>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        
        <Route path="/"  element={

          <CheckUserAuth>
        <Home/>
        </CheckUserAuth>
        }/>
       
      </Routes>
    </div>
  )

}


export default App