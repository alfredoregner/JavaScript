// Declare uma variável senha com o valor "JavaScript123". Escreva um código que verifica se a senha tem pelo menos 8 caracteres. SE sim, exiba "Senha válida"; caso contrário, exiba "Senha inválida".

const prompt = require("prompt-sync")();

let senha = "JavaScript123";
let validar = prompt("Insira a senha: ");

if(validar == senha){
    console.log(`SENHA CORRETA!`);
} else if(validar.length >= 8 && validar != senha){
    console.log(`SENHA INCORRETA!`);
} else{
    console.log(`SENHA INVÁLIDA! Senha contém mais do que 8 caracteres`);
}
