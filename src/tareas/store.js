const {Schema, model} = require('mongoose')

const taskSchema = new Schema ({
    title:{
        type:String,
        require:true,
        trim:true
    },
    description:{
        type:String,
        trim:true
    },
    done:{
        type:Boolean,
        default:false
    }
},{
    versionKey: false,
    timestamps:true
})

module.exports = model('Task', taskSchema)
