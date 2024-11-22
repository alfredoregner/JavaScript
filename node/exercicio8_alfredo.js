/* Para solicitar entradas do usuário usando o comando prompt no ambiente NODE, é necessário:
    1. Instalar a biblioteca com o camando npm install prompt-sync (NO CONSOLE/TERMINAL)
    2. Criar um objeto prompt no seu código com o comando const prompt = require("prompt-sync")()
    3. Utilize normalmente.
*/

const prompt = require("prompt-sync")();

let horas = parseInt(prompt("Insira a quantidade de horas trabalhadas por semana: "));
let valorHoras = parseFloat(prompt("Insira o valor da hora trabalhada: "));
let salarioSemanal = horas * valorHoras;
let salarioMensal = (horas * valorHoras) * 4;

console.log(`Salário semanal: ${salarioSemanal} \nSalário mensal: ${salarioMensal}`)
