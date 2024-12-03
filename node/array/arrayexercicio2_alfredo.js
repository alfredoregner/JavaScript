// Um zoológico precisa organizar a lista de seus animais. Atualmente, a lista animais contém: "Gato", "Cachorro", "Pássaro". O zoológico adquiriu um novo animal, um elefante, e ele deve ser adicionado ao final da lista. Além disso, o zoológico decidiu transferir o gato para outro local, então ele deve ser removido da lista. Exiba a lista atualizada.

let animais = ["Gato", "Cachorro", "Pássaro"];
console.log(animais);

console.log("\n -------- \n");
animais.push("Elefante");
console.log(animais);

console.log("\n -------- \n");
animais.shift();
console.log(animais);