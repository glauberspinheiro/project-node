const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const routes = require('./config/routes')
const cors = require('cors')
const fetch = require('node-fetch')
const axios = require('axios')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(routes)
app.use(cors())

app.get('/', function(req, res){
    res.sendFile(__dirname + "/src/index.html")
})

app.listen(8000, function(){
    console.log('Server on in => http://localhost:8000!')
})