const express = require('express')
const { getResetRequest, postResetRequest } = require('../controllers/reset-password.controller')
const ResetPasswordRouter = express.Router()

ResetPasswordRouter.get('/',getResetRequest)
ResetPasswordRouter.post('/',postResetRequest)

module.exports = ResetPasswordRouter