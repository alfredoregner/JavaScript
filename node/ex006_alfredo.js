/* para solicitar entradas do usuario usando o comando prompt no ambiente NODE, é necessário:
1o. instalar a biblioteca com o comando npm install prompt-sync (NO CONSOLE, NO TERMINAL)
2o. criar um objeto prompt no seu codigo com o comando var prompt = require("prompt-sync")()
3o. utilize normalmente, exemplo: var nome = prompt("digite seu nome") 
*/

//importando a biblioteca prompt
let prompt = require("prompt-sync")()

let nome = prompt("Digite seu nome:")
let horario = prompt("É manha, tarde ou noite?")

//passo 2 - use o if e imprima "Bom dia, <nome>" ou "Boa tarde, <nome>"
//agora vou fazer mudando a lógica:
//nesta versão (exercicio), utilize o operador logico OU para checar se a entrada é valida no inicio do programa
if (horario == "manha"  || horario == "tarde" || horario == "noite")
{
    if(horario == "manha") {
        console.log(`Bom dia, ${nome}`)
    }   
    if(horario == "tarde") {
        console.log(`Boa tarde, ${nome}`)
    }
    if(horario == "noite") {
        console.log(`Boa noite, ${nome}`)
    } 
}
else {
    console.log("OPÇÃO INVÁLIDA!!")
}