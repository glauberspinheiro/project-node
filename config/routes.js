const express = require('express')
const routes = express.Router()

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