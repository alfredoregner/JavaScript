//Você tem um objeto carro com as propriedades marca: "Honda", modelo: "Civic", e ano: 2020. Altere o valor da propriedade ano para 2022 e adicione uma nova propriedade chamada cor com o valor "Prata". Exiba o objeto atualizado.

const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020
};

console.log(`Ano do veículo: ${carro.ano}`);
carro.ano = 2022;
console.log(`Novo Ano do veículo: ${carro.ano}`);

carro.cor = "Prata";

console.log(`A cor do carro é: ${carro.cor}`);