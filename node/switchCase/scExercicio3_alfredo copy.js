const prompt = require("prompt-sync")();

console.log("Lista de cores: \n\nred \nblue \ngreen\n")
let cor = prompt("Insira uma cor para saber sua tradução: ");

switch(cor){
    case "red":
        console.log("vermelho");
        break;
    case "blue":
        console.log("azul");
        break;
    case "green":
        console.log("verde");
        break;
    default:
        console.log("Cor desconhecida");
        break;
}