//DESAFIO-RELÂMPAGO
//CRIA UMA FUNÇÃO QUE RECEBA 3 PARÂMETROS: O NOME DO PRODUTO, O PREÇO E O IMPOSTO E RETORNE O PROEÇO COM IMPOSTO (ALIQUOTA) CALCULADO

//CRIE UM PROGRAMA QUE PERGUNTE AS 3 INFORMAÇÕES, UTILIZE A FUNÇÃO CRIADA E IMPRIMA OS DADOS DO PRODUTO E O PREÇO FINAL COM IMPOSTO CALCULADO.
const prompt = require("prompt-sync")();

function produto(nomeproduto, valor, taxa){
    return  valor + (valor * (taxa/100)); 
}

let nome = prompt("Digite o nome do produto: ");
let preco = parseFloat(prompt("Digite o valor do produto: "));
let imposto = parseFloat(prompt("Digite o valor do imposto: "));

let resultado = produto(nome, preco, imposto);

console.log(`Nome do produto: ${nome}\nValor sem imposto: ${preco} \nValor com imposto ${resultado}`);