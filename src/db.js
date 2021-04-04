const config = require('./config')
const mongoose = require('mongoose')

const mongoDB = config.MONGODB_URI
mongoose.Promise = global.Promise;
async function connect(){
    await mongoose.connect(mongoDB, {useNewUrlParser:true,  useUnifiedTopology: true});
    console.log('Base de datos conectada con exito')

    let db = mongoose.connection;

    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = connect

