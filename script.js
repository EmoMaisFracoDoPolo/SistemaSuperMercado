

//importanto o metodo prompt()
const prompt = require("prompt-sync")();

console.log("\n _-_-_-_-_| $ Supermercado Preco Baixo $ |_-_-_-_-_ \n");

let pergunta = "Sim";
let nomeItem = "Nenhum";
let precoItem = 0;
let nomesDosItens = [];
let posicao = 0;

while(pergunta == "Sim"){
    console.log("=> Adicione um item <=");
    nomeItem = prompt("Nome do Item: ");

    nomesDosItens[posicao] = nomeItem;
    posicao++;

    precoItem = prompt("Preco do Item: ");



    pergunta = prompt("Voce Gostaria de Adicionar Mais um Item? Sim ou Nao: ");
}

for(let i = 0; i < posicao; i++){
    console.log(nomesDosItens[i]);
}