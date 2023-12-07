const express = require('express')
const router = express.Router()
const {createUser,loginUser, transaction, getallUsers} = require("../controllers/userControllers.js") 

router.post("/",createUser )
router.post("/login", loginUser)
router.put("/:id", transaction)
router.post("/admin", getallUsers)


module.exports = router