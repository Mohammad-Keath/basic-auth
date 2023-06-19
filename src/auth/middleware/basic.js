const { userModel }=require('../models/index');
const base64 = require('base-64')
const bcrypt = require('bcrypt');


module.exports = async (req,res,next)=>{
   let username = req.body.username
   let password = req.body.password
    let record = await userModel.readUsername(username)
    if(record){
    if (await bcrypt.compare(password,record.password)){
    next()
    }else next("Invalid Login : wrong password")
} else next("Invalid Login : this user is not exist")

}