const express = require('express')
const RegisterRouter = express.Router()
const registerUser = require('../controllers/register.controller')
const validateUser = require('../middlwares/validateUser.middleware')
const asyncHandler = require('../controllers/asyncHandler')

RegisterRouter.post('/',validateUser,asyncHandler(registerUser))

module.exports = RegisterRouter