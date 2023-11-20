const express=require("express")
const login=require("./userController")
const router=express.Router()

router.route("/login/result").post(login)

module.exports=router;