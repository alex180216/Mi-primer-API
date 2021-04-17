const express = require('express')
const multer = require('multer')
const router = express.Router()
const { 
    findAllTasks, createNewTask, findTaskByID, 
    deleteTaskByID, getDoneTasks, updateTaskByID,
    updateDescriptionByID
} = require('./controller')


router.get('/getTasks', findAllTasks)

router.post('/newTask', createNewTask)

router.get('/getTask/:id', findTaskByID)

router.delete('/deleteTask/:id', deleteTaskByID)

router.get('/getDoneTasks', getDoneTasks)

router.put('/updateTask/:id', updateTaskByID)

router.patch('/updateDescriptionTask/:id', updateDescriptionByID)

module.exports = router