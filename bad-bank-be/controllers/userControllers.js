const User = require("../models/userModel.js")

const createUser = async (req ,res)=>{
    console.log(req.body)
    const newUser = await User.create(req.body)
    res.json(newUser)
}

const loginUser =async (req , res)=>{
    console.log(req.body)
    const user = await User.findOne({email:req.body.email})
    //if user doesn't exist send response
    if(user.password!== req.body.password){
        res.json({message:"invalid Password"})
        return
    }
    //if needed create token and send with response
    res.json(user)
}

const transaction = async (req, res)=> {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        balance:req.body.balance
    },{new:true })
    res.json(updatedUser)

}

const getallUsers = async (req , res) => {
    try {
        if(req.body.isAdmin){
            const users = await User.find()
            res.json(users)
            return
        
        }
        res.json({message:"you are not admin"})
        
    } catch (error) {
        res.json({message:"you are not admin"})
        
    }
    
}

module.exports = {createUser, loginUser,transaction, getallUsers}