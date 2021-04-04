const express = require('express')
const tarea = require('../tareas/network')

const routes = (server) =>{
    server.use('/api/tareas', tarea)
}

module.exports = routes