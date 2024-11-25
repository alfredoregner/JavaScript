const prompt = require("prompt-sync")();

console.log("\n1 - Água \n2 - Suco \n3 - Refrigerante \n4 - Café")
let bebida = prompt("Insira o número correspondente a bebida desejada: ");

switch(bebida){
    case "1":
        console.log("Aqui está sua Água");
        break;
    case "2":
        console.log("Aqui está seu Suco");
        break;
    case "3":
        console.log("Aqui está seu Refrigerante");
        break;
    case "4":
        console.log("Aqui está seu Café");
        break;
    default:
        console.log("Número inválido!");
        break;
}