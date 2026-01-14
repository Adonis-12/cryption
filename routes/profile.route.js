const express = require('express')
const { authenticatedUsersOnly } = require('../middlewares/authenticateUser.middleware')
const ProfileRouter = express.Router()
const getUserProfile = require('../controllers/profile.controller')
const asyncHandler = require('../controllers/asyncHandler')

ProfileRouter.get('/',asyncHandler(authenticatedUsersOnly),getUserProfile)

module.exports = ProfileRouter