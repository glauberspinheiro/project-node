const Client = require('pg').Client
const cli = new Client({
    user: "postgres",
    password: "Foda@2015",
    host: "localhost",
    port: 5432,
    database: "project-nodeJs"
})