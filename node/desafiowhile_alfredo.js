let prompt = require("prompt-sync")()
let i = 0;
let num = parseInt(Math.random() * 10) + 1;

"Advinhe o número entre 1 e 10";
let numInserido = parseInt(prompt("insira um número de 1 a 10: "));

if(numInserido == num){
    prompt(`Número correto. Parabéns!! \nNúmero Inserido: ${numInserido} \nNúmero a ser advinhado: ${num}`);
}else{
    while(numInserido != num && i < 4){
        numInserido = parseInt(prompt("Número Incorreto. Insira um número de 1 a 10: "));
        i++;
    }
    prompt(`Número Incorreto. \nNúmero Inserido: ${numInserido} \nNúmero a ser advinhado: ${num}`);
};




