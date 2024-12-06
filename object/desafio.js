// Desafio Relampago. Faça uma combinação de loops para imprimir cada chave-valor de cada pessoa
pessoa8 = [
    {
        nome: "Ana",
        idade: 28,
        profissao: "Engenheira"
    },
    {
        nome: "Mario",
        idade: 25,
        profissao: "Professor"
    }
]

console.log("\n------------------------------\n");
console.log("RESULTADO OBTIDO");
// O que eu fiz
const chavesdesafio = Object.keys(pessoa8);
const valoresdesafio = Object.values(pessoa8);

chavesdesafio.forEach(chavedesafio => {
    console.log(chavedesafio);

    valoresdesafio.forEach(valordesafio => {
        console.log(valordesafio);
    });
});

// Resultado correto
console.log("\n------------------------------\n");
console.log("RESULTADO CORRETO");
pessoa8.forEach(pessoa8 => {

    Object.keys(pessoa8).forEach(chave2 => {

        console.log(`${chave2}: ${pessoa8[chave2]}`);
    })
})