

//importanto o metodo prompt()
const prompt = require("prompt-sync")();

console.log("\n |_-_-_-_-_| $ Supermercado Preco Baixo $ |_-_-_-_-_| \n");

let pergunta = "Sim";
let nomeItem = "Nenhum";
let precoItem = 0;
let vetorItens = [];
let vetorPrecos = [];
let valorTotal = 0;
let posicao = 0;

while(pergunta === "Sim" || pergunta === "sim" || pergunta === "s" || pergunta === "ss" || pergunta === "Bah tche com certeza neh"){
    console.log("=> Adicione um item <=");

    nomeItem = prompt("Nome do Item: ");
    vetorItens[posicao] = nomeItem;

    precoItem = prompt("Preco do Item: ");
    while(typeof precoItem != "number"){
        precoItem = 0;
        console.log("Voce nao digitou um valor numerico, insira novamente");
        console.log(typeof precoItem);
        precoItem = prompt("Preco do Item: ");
    }

    valorTotal += precoItem;
    vetorPrecos[posicao] = precoItem;

    posicao++;

    pergunta = prompt("Voce Gostaria de Adicionar Mais um Item? Sim ou Nao: ");
}

console.log("\n|-_-_-_-_-_-_| Total |-_-_-_-_-_-_|");
for(let i = 0; i < posicao; i++){
    console.log(vetorItens[i], " |  R$", vetorPrecos[i]);
}
console.log("valor total: ", valorTotal);