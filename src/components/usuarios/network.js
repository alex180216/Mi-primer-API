const express = require('express')
const router = express.Router()
const {addNewUser, getAllUsers} = require('./controller')

router.post('/newUser', addNewUser)
router.get('/getAllUsers', getAllUsers)

module.exports = router