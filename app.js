const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8000
const morgan = require('morgan')
const RegisterRouter = require('./routes/register.route')
const LoginRouter = require('./routes/login.route')
const ResetRequestRouter = require('./routes/reset-request.route')
const ResetPasswordRouter = require('./routes/reset-password.route')
app.use(morgan('combined'))
app.set("view engine","ejs")
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/api/users/register',RegisterRouter)
app.use('/api/users/login',LoginRouter)
app.use('/api/reset-request',ResetRequestRouter)
app.use('/reset-password',ResetPasswordRouter)
app.use((err,req,res,next) => {
    res.status(500).json({
        message : "Something went wrong",
        error : err
    })
})
app.listen(PORT,() => {
    console.log(`server is running on port number ${PORT}`)
})