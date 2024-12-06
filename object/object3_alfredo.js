// Crie um objeto pessoa com as propriedades nome: "Carlos", idade: 28, e um método cumprimento() que retorna a frase "Olá, meu nome é Carlos e tenho 28 anos.". Em seguida, execute o método e exiba o cumprimento.

const pessoaex = {
    nome: "Carlos",
    idade: 28,
    cumprimento: function(){
        console.log("Olá, meu nome é Carlos e tenho 28 anos.");
    }
};

console.log(pessoaex.cumprimento());