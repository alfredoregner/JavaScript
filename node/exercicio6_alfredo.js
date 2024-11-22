/* Para solicitar entradas do usuário usando o comando prompt no ambiente NODE, é necessário:
    1. Instalar a biblioteca com o camando npm install prompt-sync (NO CONSOLE/TERMINAL)
    2. Criar um objeto prompt no seu código com o comando const prompt = require("prompt-sync")()
    3. Utilize normalmente.
*/

const prompt = require("prompt-sync")();

let produto = prompt("Insira o nome do produto: ");
let preco = parseFloat(prompt(`Insira o valor do(a) ${produto}: `));
let desconto = parseFloat(prompt("Insira a % de desconto: "));
let valorDesconto = preco.toFixed(2) * (desconto/100);
let valorFinal = preco.toFixed(2) - valorDesconto.toFixed(2);

console.log(`Produto: ${produto} \nPreço original: ${preco.toFixed(2)} \nValor do desconto: ${valorDesconto.toFixed(2)} \nPreço final: ${valorFinal.toFixed(2)}`);