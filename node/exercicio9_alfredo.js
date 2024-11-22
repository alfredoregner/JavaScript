/* Para solicitar entradas do usuário usando o comando prompt no ambiente NODE, é necessário:
    1. Instalar a biblioteca com o camando npm install prompt-sync (NO CONSOLE/TERMINAL)
    2. Criar um objeto prompt no seu código com o comando const prompt = require("prompt-sync")()
    3. Utilize normalmente.
*/

const prompt = require("prompt-sync")();

let compra = parseFloat(prompt("Insira o valor total da compra: ")).toFixed(2);
let parcela = parseInt(prompt("Insira a quantidade de parcelas: "));
let juros = prompt("Digite o valor da % de juros : ");
let valorFinal = compra * (1 + (juros/100) * parcela);
let valorParcelas = valorFinal / parcela;


console.log(`Valor da compra: ${compra} \nNúmero de parcelas: ${parcela} \nTaxa de juros: ${juros} \nValor das parcelas: ${valorParcelas}`);
