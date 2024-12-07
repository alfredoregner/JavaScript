//Declaração de função - Quando eu crio a função
// function saudacao(){
//     console.log("Olá mundo!");
// }

//Chamada de função - usando a função
// saudacao();
// saudacao();
// saudacao();

//Declaração de função com passagem de parâmetro 
//Definição do parâmetro (melancia) não importa o nome, é apenas uma referência para o código
// function saudacao_personalizada(melancia){
//     console.log("Olá, " + melancia + ", seja bem vindo!");
// }

// const prompt = require("prompt-sync")();

// nomeusuario = prompt("Digite o seu nome: ");

// nomeamigo = prompt("Digite o nome do seu amigo: ");

// saudacao_personalizada("Anderson");
// saudacao_personalizada("Turma");
// saudacao_personalizada(nomeusuario);
// saudacao_personalizada(nomeamigo);

//Função com dois parâmetros e retorno
function calculaMedia(n1, n2){
    return (n1 + n2) / 2;
}

nota1 = parseFloat(prompt("Digite a primeira nota: "));
nota2 = parseFloat(prompt("Digite a segunda nota: "));

media = calculaMedia(nota1, nota2);

console.log(`A média do aluno foi: ${media}`);
