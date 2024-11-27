// Seleciona o título e altera seu texto
const titulo = document.getElementById("titulo");
titulo.innerText = "DOM em Ação!";

// Seleciona a lista e adiciona um novo item
const lista = document.querySelector("ul"); //Buscar o elemento e colocar em uma variável
const novoItem = document.createElement("li"); // Criar o elemento filho e colocar em uma variável também
novoItem.innerText = "Item 3"; // Adicionar o conteúdo ao elemento filho
lista.appendChild(novoItem); // Anexar o conteúdo do elemento filho ao elemento pai

const nome = document.createElement("li");
nome.innerText = "Alfredo";
lista.appendChild(nome);

lista.removeChild(novoItem)


// const pai = document.getElementByID("artigo");
// const filho = document.createElement("h1");
// filho.innerText="Artigo sobre roupas"
// pai.appendChild(filho);