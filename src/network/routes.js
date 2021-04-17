const express = require('express')
const tarea = require('../components/tareas/network')
const usuario = require('../components/usuarios/network')
const chat = require('../components/chats/network')

const routes = (server) =>{
    server.use('/api/tareas', tarea)
    server.use('/api/usuarios', usuario)
    server.use('/api/chats', chat)
}

module.exports = routes