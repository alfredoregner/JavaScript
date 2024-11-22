/* Para solicitar entradas do usuário usando o comando prompt no ambiente NODE, é necessário:
    1. Instalar a biblioteca com o camando npm install prompt-sync (NO CONSOLE/TERMINAL)
    2. Criar um objeto prompt no seu código com o comando const prompt = require("prompt-sync")()
    3. Utilize normalmente.
*/

const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Insira o primeiro número: "));
let num2 = parseFloat(prompt("Insira o segundo número: "));

if(num1 >= num2){
    let diff = num1 - num2;
    console.log(`A diferença entre ${num1} e ${num2} é: ${diff}`);
} else{
    let diff = num2 - num1;
    console.log(`A diferença entre ${num2} e ${num1} é: ${diff}`);
}


