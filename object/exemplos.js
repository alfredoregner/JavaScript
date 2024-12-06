// Criação de Variável
let fruta = "Maçã"; 

// Criação de Array
let frutas = ["Maçã", "Banana", "Uva"]; 

// Criação de Objeto
let pessoa2 = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
};

//-------------------------------------------------

//Exemplo de objeto dentro de um objeto
const pessoa = {
    nome: "João",
    idade: 30,
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo",
        estado: "SP"
    }
};

console.log("Acessando propriedades do objeto 'endereco'");

// Acessando propriedades do objeto 'endereco'
console.log(pessoa.nome);               // João
console.log(pessoa.endereco.rua);       // Rua das Flores
console.log(pessoa.endereco.cidade);    // São Paulo

console.log("\n------------------------------\n");
console.log("Array de Objetos");

//Array de Objetos
const pessoas = [
    //index: 0
    {                               
        nome: "Ana",
        idade: 28,
        profissao: "Engenheira"
    },                     

    //index: 1
    {                               
        nome: "Carlos",
        idade: 35,
        profissao: "Professor"
    },

    //index: 2
    {                               
        nome: "Maria",
        idade: 22,
        profissao: "Designer"
    }
];

// Acessando os objetos no array
console.log(pessoas[0].nome); // Ana
console.log(pessoas[1].idade); // 35
console.log(pessoas[2].profissao); // Designer

console.log("\n------------------------------\n");
console.log("Array de Arrays");
// Array de Arrays
// Exemplo: Cada filial tem 3 vendas: frutas, bolsas, canetas

vendaslojas = [
    //index 0 de vendaslojas
    [2000, 3000, 4000], 
    // 0    1       2

    //index 1 de vendaslojas
    [400, 500, 1000]
    // 0    1   2
]

console.log("As vendas de bolsas da primeira loja foram: "+ vendaslojas[0][1]);
console.log("As vendas de canetas da segunda loja foram: "+ vendaslojas[1][2]);

console.log("\n------------------------------\n");
console.log("Objeto com objetos");
// Objeto contendo vários objetos

const empresa = {
    funcionario1: { nome: "Ana", idade: 28, cargo: "Engenheira" },
    funcionario2: { nome: "Carlos", idade: 35, cargo: "Professor" },
    funcionario3: { nome: "Maria", idade: 22, cargo: "Designer" }
};

// Acessando os objetos dentro do objeto 'empresa'
// Usando notação ponto
console.log(empresa.funcionario1.nome); // Ana
console.log(empresa.funcionario2.cargo); // Professor
console.log(empresa.funcionario3.idade); // 22

// Usando notação colchetes "Maria"
console.log(empresa.funcionario3["nome"]); 

//
empresa.funcionario3.idade = 23; //Alterando o valor de uma propriedade do objeto
console.log(empresa.funcionario3.idade); // 23

console.log("\n------------------------------\n");
console.log("Adicionando objetos dentro de objetos dinamicamente");
//Adicionando objetos dentro de objetos dinamicamente:
const pessoa3 = {
    nome: "Ana",
    idade: 25
};
  
console.log("Pessoa 3 antes da atualização " + pessoa3)

// Adicionando o objeto 'endereco' depois
pessoa3.endereco = {
    rua: "Avenida Central",
    numero: 456,
    cidade: "Rio de Janeiro",
    estado: "RJ"
};
  
console.log(pessoa.endereco.cidade); // Rio de Janeiro

console.log("\n------------------------------\n");
console.log("Adicionando um novo objeto ao array de objetos");
// Adicionando um novo objeto ao array de objetos
const pessoas4 = [
    {
      nome: "Ana",
      idade: 28,
      profissao: "Engenheira"
    },
    {
      nome: "Carlos",
      idade: 35,
      profissao: "Professor"
    },
];
pessoas4.push({
    nome: "Pedro",
    idade: 40,
    profissao: "Médico"
});
  
console.log(pessoas4[2].nome); // Pedro

console.log("\n------------------------------\n");
console.log("Removendo objetos de um objeto ");
// Removendo objetos de um objeto
const empresa1 = {
    nome: "Tech Solutions",
    fundacao: 2010,
    endereco: {
      rua: "Rua das Flores",
      numero: 123,
      cidade: "São Paulo",
      estado: "SP"
    }
};
  
// Removendo o objeto 'endereco'
delete empresa1.endereco;
  
console.log(empresa1);
/*
Saída:
{
    nome: "Tech Solutions",
    fundacao: 2010
}
*/

console.log("\n------------------------------\n");
console.log("Usando Object.assign() para mesclar objetos");
// Usando Object.assign() para mesclar objetos
const pessoa5 = {
    nome: "João",
    idade: 30
  };
  
  const novoEndereco = {
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  };
  
  // Mesclando o novo objeto 'endereco' no objeto 'pessoa'
  Object.assign(pessoa5, novoEndereco);
  
  console.log(pessoa5);
  /*
  Saída:
  {
    nome: "João",
    idade: 30,
    endereco: {
      rua: "Rua das Palmeiras",
      numero: 456,
      cidade: "Rio de Janeiro"
    }
  }
  */

console.log("\n------------------------------\n");
console.log("Criando um Array somente com as chaves do objeto");
//Criando um Array somente com as chaves do objeto

const person = {
    nome: 'John',
    idade: 30,
    cidade: 'New York'
};
const chaves = Object.keys(person);
const valores = Object.values(person) // Extraindo um Array com os valores do objeto

console.log(chaves); // ['nome', 'idade', 'cidade']
console.log("\n------------------------------\n");
console.log("Criando um Array somente com os valores do objeto");
console.log(valores) // ['John', '30', 'New York']
console.log("\n------------------------------\n");
console.log(chaves[1]);

console.log("\n------------------------------\n");
console.log("Repetição com as chaves do objeto");
chaves.forEach(chave => {console.log(chave)}); // Extraindo um Array com as chaves do objeto

console.log("\n------------------------------\n");
console.log("Repetição com os valores do objeto");
valores.forEach(valor => {console.log(valor)}); // Extraindo um Array com os valores do objeto

console.log("\n------------------------------\n");
console.log("Adicionando Novas Propriedades");
pessoa.email = "joao@email.com";
console.log(pessoa); // { nome: 'João', idade: 30, email: 'joao@email.com' }

console.log("\n------------------------------\n");
console.log("Operador in");
let pessoa6 = {
    nome: "João",
    idade: 30,
    saudacao: function() {
      return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};
console.log("nome" in pessoa6); // true
console.log("sobrenome" in pessoa6); // false

console.log("\n------------------------------\n");
console.log("hasOwnProperty()");
console.log(pessoa.hasOwnProperty("idade")); // true

console.log("\n------------------------------\n");
console.log("Percorrendo Objetos");
let pessoa7 = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor"
};
    for (let chave in pessoa7) {
    console.log(chave + ": " + pessoa7[chave]);
}

console.log("\n------------------------------\n");
console.log("Exemplo Completo");
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    ligar: function() {
      return `O carro ${this.marca} ${this.modelo} está ligado.`;
    }
};

console.log(carro.ligar()); // "O carro Toyota Corolla está ligado."
carro.ano = 2021; // Atualizando o ano
console.log(carro.ano); // 2021

console.log("\n------------------------------\n");
console.log("Desafio Relâmpago");
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