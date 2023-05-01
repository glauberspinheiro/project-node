const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)

app.get('/', function(req, res){
    res.send('Olá Mundo!')
})

app.listen(8000, function(){
    console.log('Exemple app listening on port http://localhost:8000!')
})