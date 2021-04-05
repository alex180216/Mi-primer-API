const Usuario = require('./store')
const {success, error} = require('../../network/response')

//Añadir usuario
const addNewUser = async (req, res) =>{
    if(!req.body.userName){
        error(req, res, 'Nombre invalido', 404)
    }else{
        const nuevoUsuario = new Usuario({
            userName: req.body.userName
        })
     
        const userSaved = await nuevoUsuario.save()

        if(userSaved != null){
            success(req, res,`Usuario creado correctamente: ${userSaved.nombre}`, 201)
        }else{
            error(req, res, 'Error al crear al usuario', 404)
        }
    }
    
}

//obtener todos los usuarios
const getAllUsers = async (req, res)=>{
    const listaUsuarios = await Usuario.find()
    success(req, res, listaUsuarios, 200)
}


module.exports = {
    addNewUser,
    getAllUsers
}