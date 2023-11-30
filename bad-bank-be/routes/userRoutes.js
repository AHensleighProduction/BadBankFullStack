const express = require('express')
const router = express.Router()
const {createUser,loginUser, transaction, getallUsers} = require("../controllers/userControllers.js") 

router.post("/",createUser )
router.post("/login", loginUser)
router.put("/:id", transaction)
router.get("/", getallUsers)


module.exports = router