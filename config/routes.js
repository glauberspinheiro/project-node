const express = require('express')
const routes = express.Router()
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

async function contacaoDolar(req, res){
    const dataAtualCotacao = new Date();

    const contacaoResp = await fetch("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='05-02-2023'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao")
    const cotacaoRespJson = await  contacaoResp.json()
    console.log(cotacaoRespJson)
}contacaoDolar()

/*cep.addEventListener("blur", (e)=>{
    //let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/38406136/json/`).then(response =>{
        response.json().then(data => showData(data))
    })
    .catch(e => console.log('Deu Problema: '+e, message))

    const showData = (result)=>{
        for(const campo in result){
            if(document.querySelector("#"+campo)){
                document.querySelector("#"+campo).value = result[campo]
            }
        
        }
        
    }
    console.log(campo)
})*/
module.exports =routes