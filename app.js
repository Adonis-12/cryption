const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8000
const RegisterRouter = require('./routes/register.route')
const LoginRouter = require('./routes/login.route')
app.use(express.json())
app.use('/api/users/register',RegisterRouter)
app.use('/api/users/login',LoginRouter)
app.use((err,req,res,next) => {
    res.status(500).json({
        message : "Something went wrong",
        error : err
    })
})
app.listen(PORT,() => {
    console.log(`server is running on port number ${PORT}`)
})