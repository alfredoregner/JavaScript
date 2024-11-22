/* Para solicitar entradas do usuário usando o comando prompt no ambiente NODE, é necessário:
    1. Instalar a biblioteca com o camando npm install prompt-sync (NO CONSOLE/TERMINAL)
    2. Criar um objeto prompt no seu código com o comando const prompt = require("prompt-sync")()
    3. Utilize normalmente.
*/

const prompt = require("prompt-sync")();

    let celcius = parseFloat(prompt("Insira uma temperatura em Celcius: "));
    let fahrenheit = celcius * 9/5 + 32;

    console.log(`${celcius} Celcius é o equivalente a ${fahrenheit} Fahrenheit`);
    