import express from "express"
import userRoute from "./userRoute.js"

const Router=express.Router()

Router.use(userRoute)


export default Router