const Tarea = require('./store')
const {success, error} = require('../../network/response')

//obtener todas las tareas
const findAllTasks = async (req, res)=>{
    const listaTareas = await Tarea.find()
    .populate({path:'user', model:'User'})
    .exec()
    success(req, res, listaTareas, 200)
}

//Crear tarea nueva
const createNewTask = async (req, res)=>{
    if(req.query.error == 'ok'){
        error(req, res, 'Error en los parametros de la url', 404)
        console.log('===============Error en el query===================')
    }else{
        if(!req.body.title || !req.body.description){
            error(req, res, 'Faltan datos para crear la tarea', 400)
        }else{
            const nuevaTarea = new Tarea({
                title:req.body.title,
                description:req.body.description,
                done: req.body.done ? req.body.done : false,
                user:req.body.user
            })
            const taskSaved = await nuevaTarea.save()
            //console.log(nuevaTarea)
            if(taskSaved != null){
                success(req, res,`Tarea creada correctamente: ${taskSaved.title}`, 201)
            }else{
                error(req, res, 'Error al crear la tarea', 404)
            }
        }
    }
    res.send('obteniendo lista de tareas')
}

//buscar tarea segun ID
const findTaskByID = async (req, res) =>{
    const tareaEncontrada = await Tarea.findById(req.params.id)
    if (tareaEncontrada != null){
        success(req, res, tareaEncontrada, 200)
    }else{
        error(req, res, 'Tarea no encontrada', 404)
    }
    
}

//eliminar tareas segun ID
const deleteTaskByID = async (req, res) =>{
    const tareaEncontrada = await Tarea.findById(req.params.id)
    if(tareaEncontrada != null){
        const tareaEliminada = await Tarea.findByIdAndDelete(req.params.id)
        if(tareaEliminada != null){
            success(req, res, `Tarea ${req.params.id} eliminada satisfactoriamente`, 200)
        }else{
            error(req, res, `No se ha podido eliminar la tarea ${req.params.id}`, 404)
        }
    }else{
        success(req, res, `La Tarea ${req.params.id} no existe`)
    }
    
    
    
}
//Obtener tareas realizadas (done:true)
const getDoneTasks = async (req, res) =>{
    const listaTareasRealizadas = await Tarea.find({done: true})
    if(listaTareasRealizadas.length > 0){
        success(req, res, listaTareasRealizadas, 200)
    }else{
        success(req, res, 'No existen tareas con realizadas', 200)
    }
}

//Actualizar tarea por ID (actualiza objeto completo)
const updateTaskByID = async (req, res) =>{
    const tareaActualizada = await Tarea.findByIdAndUpdate(req.params.id, req.body)
    if(tareaActualizada != null){
        success(req, res, `Tarea ${req.params.id} actualizada Correctamente`, 200)
    }else{
        error(req, res, 'No se ha podido Actualizar la tarea', 404)
    }
    
}

//Actualiza tarea por ID (actualiza Descripcion)
const updateDescriptionByID = async (req, res) =>{
    const tareaEncontrada = await Tarea.findById(req.params.id)
    if(tareaEncontrada != null){
        tareaEncontrada.description = req.body.description
        const taskSaved = await tareaEncontrada.save()

        if(taskSaved != null){
            success(req, res, `Tarea actualizada Correctamente`, 200)
        }else{
            error(req, res, 'No se ha podido Actualizar la tarea', 404)
        }
    }else{
        error(req, res, 'No se ha encontrado la tarea', 404)
    }
    

    
    
    
}

module.exports = {
    findAllTasks,
    createNewTask,
    findTaskByID,
    deleteTaskByID,
    getDoneTasks,
    updateTaskByID,
    updateDescriptionByID,
}