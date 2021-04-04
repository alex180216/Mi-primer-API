const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db  = require('./db')
const router = require('./network/routes')
const config = require('./config')


const app = express()
const port = config.PORT

db()

app.use(cors())
app.use(bodyParser.json())
router(app)


app.listen(port, ()=>{
    console.log(`Escuchando por localhost:${port}`)
})