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
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true,
        //autopopulate:true
    },
    chat:{
        type:Schema.Types.ObjectId,
        ref:'Chat',
        require:true,
    },
    file:{
        type:String,
        default:''
    }
},{
    versionKey: false,
    timestamps:true
})

//taskSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Task', taskSchema)
