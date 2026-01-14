const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8000
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const RegisterRouter = require('./routes/register.route')
const LoginRouter = require('./routes/login.route')
const ResetRequestRouter = require('./routes/reset-request.route')
const ResetPasswordRouter = require('./routes/reset-password.route')
const ProfileRouter = require('./routes/profile.route')
const LogoutRouter = require('./routes/logout.route')
app.use(morgan('combined'))
app.use(cookieParser())
app.set("view engine","ejs")
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.get('/',(req,res) =>{
    return res.render("index",{
        base_url : process.env.BASE_URL
    })
})
app.use('/register',RegisterRouter)
app.use('/login',LoginRouter)
app.use('/profile',ProfileRouter)
app.use('/api/users/register',RegisterRouter)
app.use('/api/users/login',LoginRouter)
app.use('/api/users/logout',LogoutRouter)
app.use('/api/reset-request',ResetRequestRouter)
app.use('/reset-password',ResetPasswordRouter)
app.use((err,req,res,next) => {
    res.status(500).json({
        message : "Something went wrong"
    })
})
app.listen(PORT,() => {
    console.log(`server is running on port number ${PORT}`)
})