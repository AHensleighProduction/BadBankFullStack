const express = require('express')
const dotenv = require("dotenv")
const mongoose= require ("mongoose")
const cors = require("cors")
const app = express()
dotenv.config()
const port = process.env.PORT || 5001
const userRoutes = require("./routes/userRoutes.js")


app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("connected") 
}).catch((error)=>{
console.error(error)
})

app.get('/', (req, res) => {
  res.send('hi sisters!!!')
})
app.use("/users", userRoutes)

app.listen(port, () => {
  console.log(`badBank app listening on port ${port}`)
})