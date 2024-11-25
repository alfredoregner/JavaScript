const prompt = require("prompt-sync")();

let nome = prompt("Insira o nome do aluno: ");
let nota1 = parseFloat(prompt("Insira a primeira nota: "));
if(nota1 >= 0 && nota1 <= 10)
{
    let nota2 = parseFloat(prompt("Insira a segunda nota: "));

    if(nota2 >= 0 && nota2 <= 10){
        let nota3 = parseFloat(prompt("Insira a terceira nota: "));

        if(nota3 >= 0 && nota3 <= 10){
            let faltas = parseFloat(prompt("Insira a % de faltas: "));
            

            if(faltas >= 0 && faltas <= 100){

                let media = (nota1 + nota2 + nota3) / 3;

                if(media.toFixed(2) >= 7 && faltas < 25){
                    console.log(`${nome} APROVADO. \nMédia: ${media.toFixed(2)} \nFaltas: ${faltas.toFixed(2)}%`);

                }else if(media < 7 && media >= 5 && faltas < 25){
                    console.log(`${nome} RECUPERAÇÃO. \nMédia: ${media.toFixed(2)} \nFaltas: ${faltas.toFixed(2)}%`);

                }else{
                    console.log(`${nome} REPROVADO. \nMédia: ${media.toFixed(2)} \nFaltas: ${faltas.toFixed(2)}%`);
                }
            }else{
                console.log("Média inválida");

            }

        }else{
            console.log("Nota inválida");

        }
    }else{
        console.log("Nota inválida");

    }
}else{
    console.log("Nota inválida");

}


