/* para solicitar entradas do usuario usando o comando prompt no ambiente NODE, é necessário:
1o. instalar a biblioteca com o comando npm install prompt-sync (NO CONSOLE, NO TERMINAL)
2o. criar um objeto prompt no seu codigo com o comando var prompt = require("prompt-sync")()
3o. utilize normalmente, exemplo: var nome = prompt("digite seu nome") 
*/

//importando a biblioteca prompt
let prompt = require("prompt-sync")()

let nome = prompt("Digite seu nome: ");
let horario = prompt("É manha, tarde ou noite? ");

if(horario == "manha"){
    console.log("Bom dia, " + nome);
} else if(horario == "tarde"){
    console.log("Boa tarde, " + nome);
}else if(horario == "noite"){
    console.log("Boa noite, "+ nome);
}else{
    console.log("Opção inválida");
}