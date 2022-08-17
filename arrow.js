const  rg = "" 
const nickname = "jakson Gouveia"
const nomemae = "Jeilza goubeia"

function verificaIdentidade(Rg,nome,nomeMae){

    if(rg !== "" && nome !== "" && nomemae !== null)
    {return `O nome da mãe é ${nomemae}, seu RG é ${rg} e atende pelo nome ${nickname}`}
     else{ return alert("Precisa preencher os dados")}}

console.log(verificaIdentidade(rg,nickname,nomemae))