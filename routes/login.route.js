const express = require('express')
const LoginRouter = express.Router()
const asyncHandler = require('../controllers/asyncHandler')
const login = require('../controllers/login.controller')
const validateUser = require('../middlewares/validateUser.middleware')

LoginRouter.post('/',validateUser,asyncHandler(login))
module.exports = LoginRouter