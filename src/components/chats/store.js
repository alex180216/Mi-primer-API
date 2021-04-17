const {Schema, model} = require('mongoose')

const chatSchema = new Schema ({
    users:[{
        type:Schema.ObjectId,
        ref:'User',
        require:true
    }]
},{
    versionKey: false,
    timestamps:true
})

//taskSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Chat', chatSchema)