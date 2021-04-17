const Chat = require('./store')
const {success, error} = require('../../network/response')

//obtener todos los chats 
const getChats = async (req, res) =>{
    const listaChats = await Chat.find()
    .populate({path:'users', model:'User'})
    .exec()
    if(listaChats){
        success(req, res, listaChats, 200)
    }else{
        success(req, res, 'No existen Chats', 200)
    }
}

//crear un chat con minimo 2 usuarios
const createNewChat = async (req, res) =>{
    if(!req.body.users||!Array.isArray(req.body.users)){
        error(req, res, 'Lista de usuarios invalida', 500)
    }else{
        if(req.body.users.length > 1){
            const nuevoChat = new Chat({
                users: req.body.users
            })
            const chatSaved = await nuevoChat.save()
            if(chatSaved != null){
                success(req, res,`Chat creado correctamente: ${chatSaved.users.userName}`, 201)
            }else{
                error(req, res, 'Error al crear chat', 500)
            }
        }else{
            success(req, res, 'El chat debe tener minimo 2 usuarios', 500)
        }
    }
    
    
}

//obtener todos los chats segun userId 
const getChatsByUserId = async (req, res) =>{
    
    const listaChats = await Chat.find({
        users: req.params.id
    }).populate({path:'users', model:'User'})
    .exec()
    //console.log(listaChats)
    if(listaChats){
        success(req, res, listaChats, 200)
    }else{
        success(req, res, 'No existen Chats para este usuario', 200)
    }
}

//eliminar chat segun ID
const deleteChatByID = async (req, res) =>{
    const chatEncontrado = await Chat.findById(req.params.id)
    if(chatEncontrado != null){
        const chatEncontrado = await Chat.findByIdAndDelete(req.params.id)
        if(chatEncontrado != null){
            success(req, res, `Chat ${req.params.id} eliminado satisfactoriamente`, 200)
        }else{
            error(req, res, `No se ha podido eliminar el Chat ${req.params.id}`, 500)
        }
    }else{
        success(req, res, `El Chat ${req.params.id} no existe`)
    }
    
    
    
}

module.exports = {
    getChats,
    createNewChat,
    getChatsByUserId,
    deleteChatByID
}