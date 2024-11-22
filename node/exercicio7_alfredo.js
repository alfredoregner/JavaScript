/* Para solicitar entradas do usuário usando o comando prompt no ambiente NODE, é necessário:
    1. Instalar a biblioteca com o camando npm install prompt-sync (NO CONSOLE/TERMINAL)
    2. Criar um objeto prompt no seu código com o comando const prompt = require("prompt-sync")()
    3. Utilize normalmente.
*/

const prompt = require("prompt-sync")();

let compra = parseFloat(prompt("Insira o valor total da compra: "));
let parcelas = parseInt(prompt("Insira a quantidade de parcelas: "));
let valorParc = compra / parcelas;

console.log(`Valor total da compra: ${compra} \nNúmero de parcelas: ${parcelas} \nValor das parcelas: ${valorParc}`);

