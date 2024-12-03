let frutas = ["Maçã", "Banana", "Laranja", "Melancia"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

// let cabecalho = ["Código", "Nome", "Preço"];
// let produto = ["ABC123", "Fone de ouvido", 150.00];

// console.log(
//     `Detalhes do Produto:
//     ${cabecalho[0]} : ${produto[0]}
//     ${cabecalho[1]} : ${produto[1]}
//     ${cabecalho[2]} : ${produto[2]}`
// )

frutas[1] = "Manga";
console.log("\n -------- \n"+ frutas[1]);

console.log("\n -------- \n"+ frutas);
console.log("O tamanho do array é: " + frutas.length); //tamanho do array

frutas.push("Melão"); //push coloca elemento no final do array
frutas.push("Kiwi");
frutas.push("Morango");

console.log("O novo tamanho do array é: " + frutas.length);
console.log(frutas);

frutas.pop(); //remove o último elemento do array
console.log(frutas);

console.log("\n -------- \n");

frutas.shift(); //remove o primeiro elemento do array
frutas.unshift("Jabuticaba"); //adiciona um novo primeiro elemento do array
console.log(frutas);

console.log("\n -------- \n");
let indice = frutas.indexOf("Laranja");
console.log(indice);

console.log("\n -------- \n");
let algumasFrutas = frutas.slice(3,5);
console.log(algumasFrutas);

console.log("\n -------- \n");
let removerFrutas = frutas.splice(5,1); // splice remove os elementos (indice onde inicia a remoção, quantos elementos a partir do indice serão removidos)
console.log(removerFrutas);
console.log(frutas);