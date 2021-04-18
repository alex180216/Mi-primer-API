const express = require('express')
const router = express.Router()
const {upload} = require('../../utils/filesMulter')
const { 
    findAllTasks, createNewTask, findTaskByID, 
    deleteTaskByID, getDoneTasks, updateTaskByID,
    updateDescriptionByID, deleteTaskList
} = require('./controller')



router.get('/getTasks', findAllTasks)

router.post('/newTask', upload.single('file'), createNewTask)

router.get('/getTask/:id', findTaskByID)

router.delete('/deleteTask/:id', deleteTaskByID)

router.delete('/deleteTaskList', deleteTaskList)

router.get('/getDoneTasks', getDoneTasks)

router.put('/updateTask/:id', updateTaskByID)

router.patch('/updateDescriptionTask/:id', updateDescriptionByID)

module.exports = router