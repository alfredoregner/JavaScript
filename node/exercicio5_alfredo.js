/* Para solicitar entradas do usuário usando o comando prompt no ambiente NODE, é necessário:
    1. Instalar a biblioteca com o camando npm install prompt-sync (NO CONSOLE/TERMINAL)
    2. Criar um objeto prompt no seu código com o comando const prompt = require("prompt-sync")()
    3. Utilize normalmente.
*/

const prompt = require("prompt-sync")();

let produto = prompt("Insira o nome do produto: ");
let valor = parseFloat(prompt("Insira o valor unitário do produto: "));
let quantidade = parseInt(prompt("Insira a quantidade desejada: "));
let compra = quantidade * valor;
let imposto = compra * 0.18;
let total = compra + imposto;


console.log(`Produto: ${produto} \nValor da unidade: ${valor.toFixed(2)} \nQuantidade: ${quantidade} \nImposto: ${imposto.toFixed(2)} \nValor total da compra: ${total.toFixed(2)}`);
