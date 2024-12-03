// Uma lista de alimentos contém: "Arroz", "Feijão", "Batata", "Macarrão", "Carne". Para uma receita específica, você só precisa dos ingredientes "Feijão" e "Batata". Crie uma nova lista que contenha apenas esses dois ingredientes e exiba o resultado.

let alimentos = ["Arroz", "Feijão", "Batata", "Macarrão", "Carne"];
console.log(alimentos);

// com .slice()
let receita = alimentos.slice(1, 3);
console.log(receita);

// com .splice()
console.log(alimentos.splice(1, 2));