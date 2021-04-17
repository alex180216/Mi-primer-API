const express = require('express')
const router = express.Router()
const {
    getChats, createNewChat, getChatsByUserId,
    deleteChatByID
} = require('./controller')


router.get('/getChats', getChats)

router.post('/createChat', createNewChat)

router.get('/getChats/:id', getChatsByUserId)

router.delete('/deleteChat/:id', deleteChatByID)

module.exports = router