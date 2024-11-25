const prompt = require("prompt-sync")();

console.log("\n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão");
let operacao = Number(prompt("Insira o número da operação desejada: "));
let num1 = parseFloat(prompt("Insira o primeiro número: "));
let num2 = parseFloat(prompt("Insira o segundo número: "));

switch(operacao){
    case 1:
        console.log(`A soma dos números ${num1} e ${num2} é ${num1+num2}`);
        break;
    case 2:
        console.log(`A soma dos números ${num1} e ${num2} é ${num1-num2}`);
        break;
    case 3:
        console.log(`A soma dos números ${num1} e ${num2} é ${num1*num2}`);
        break;
    case 4:
        if(num2 === 0){
            console.log("Não é permitido dividir por 0");
        } else{
            console.log(`A soma dos números ${num1} e ${num2} é ${num1/num2}`);
        }
        break;
    default:
        console.log("Opção inválida!");
        break;
}