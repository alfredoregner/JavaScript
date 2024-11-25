const prompt = require("prompt-sync")();

console.log("Lista de eventos: \n1 - Workshop \n2 - Palestra \n3 - Hackathon\n");
let evento = Number(prompt("Insira o número correspondente ao evento desejado: "));

switch(evento){
    case 1:
        let participantes = Number(prompt("Insira a quantidade de participantes: "));
        console.log(`
            Tipo de evento: Workshop
            Número de participantes: ${participantes}
            Custo total: R$${participantes * 50}`);
        break;
    case 2:
        let horas = Number(prompt("Insira a quantidade de horas: "));
        console.log(`
            Tipo de evento: Palestra
            Horas de palestra: ${horas}
            Custo total: R$${horas * 100}`);
        break;
    case 3:
        let dias = Number(prompt("Insira a quantidade de dias: "));
        let equipes = Number(prompt("Insira a quantidade de equipes: "));
        console.log(`
            Tipo de evento: Hackathon
            Quantidade de dias: ${dias}
            Quantidade de equipes: ${equipes}
            Custo total: ${(500*equipes) * dias}`);
        break;
    default:
        console.log("Opção inválida");
        break;
}