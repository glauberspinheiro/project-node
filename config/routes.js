const express = require('express')
const routes = express.Router()

/*const Client = require('pg').Client
const cli = new Client({
    user: "postgres",
    password: "Foda@2015",
    host: "localhost",
    port: 5432,
    database: "project-nodeJs"
})*/

let banco =[
    {'1': { nome: 'GLAUBER PINHEIRO', email: 'glauber@gmail.com', cpf: '01575025620'}},
    {'2': { nome: 'TAYANNY MARIA SOUSA DA SILVA', email: 'glauber@gmail.com', cpf: '01575025620'}},
    {'3': { nome: 'GABRIELA DA SILVA PINHEIRO', email: 'glauber@gmail.com', cpf: '01575025620'}},
    {'4': { nome: 'EZEQUIEL PINHEIRO DE JESUS', email: 'glauber@gmail.com', cpf: '01575025620'}},
    {'5': { nome: 'MARIA NEUZA DA SILVA PINHEIRO', email: 'glauber@gmail.com', cpf: '01575025620'}},
    {'6': { nome: 'EDERSON JONES DA SILVA PINHEIRO', email: 'glauber@gmail.com', cpf: '01575025620'}},
    {'7': { nome: 'THALILIAN ALVES', email: 'glauber@gmail.com', cpf: '01575025620'}},    
]

console.table(banco)

let bancoPessoa =[
    {id: '1', nome: 'GLAUBER PINHEIRO', email: 'glauber@gmail.com', cpf: '01575025620'},
    {id: '2', nome: 'TAYANNY MARIA SOUSA DA SILVA', email: 'glauber@gmail.com', cpf: '01575025620'},
    {id: '3', nome: 'GABRIELA DA SILVA PINHEIRO', email: 'glauber@gmail.com', cpf: '01575025620'},
    {id: '4', nome: 'EZEQUIEL PINHEIRO DE JESUS', email: 'glauber@gmail.com', cpf: '01575025620'},
    {id: '5', nome: 'MARIA NEUZA DA SILVA PINHEIRO', email: 'glauber@gmail.com', cpf: '01575025620'},
    {id: '6', nome: 'EDERSON JONES DA SILVA PINHEIRO', email: 'glauber@gmail.com', cpf: '01575025620'},
    {id: '7', nome: 'THALILIAN ALVES', email: 'glauber@gmail.com', cpf: '01575025620'},    
]

console.table(bancoPessoa)

//buscar dados
routes.get('/buscar', (req, res) => {
    return res.json(banco)
})

//postar dados
routes.post('/adicionar', (req, res) =>{
    const body = req.body

    if (!body)
        return res.status(400).end()
    
    banco.push(body)
        return res.json(body)
})
//deletar arquivos por id
routes.delete('/deletar/:id', (req, res) =>{
    const id = req.params.id

    let nBanco = banco.filter(item =>{
        if(!item[id])
            return item
    })

    banco = nBanco

    return res.send(nBanco)
})

//buscar informação por id
routes.get('/buscar/:id', (req, res) =>{
    const id = req.params.id

    let dbanco = banco.filter(item =>{
        if(!item[id])
            return item
    })

    banco = dbanco

    return res.json(dbanco)
})
/*
async function contacaoDolar(req, res){
    const dataAtualCotacao = new Date();

    const contacaoResp = await fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='04-28-2023'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao")
    const cotacaoRespJson = await  contacaoResp.json()
    const valorCompra = cotacaoRespJson.cotacaoCompra
    const valorVompra = cotacaoRespJson.cotacaoVenda
    const dataHCotacao = cotacaoRespJson.dataHoraCotacao

    return res.json({
        dataAtual: dataAtualCotacao.toGMTString()
        valorCompra: valorCompra
        valorRVompra: valorVompra
        cotadoEm: dataHCotacao.toGMTString()
    })
}*/
/*routes.use(Client())
dbacesso.connect()
dbacesso.query("select * from cidade").then(results => {
    const resultado = results.rows
    console.log(resultado)
})
.finally(() => dbacesso.end())*/
module.exports =routes