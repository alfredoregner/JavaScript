// Seleciona os elementos
const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

const caixa2 = document.getElementById("caixa2");
const botao2 = document.getElementById("botao2");

const caixa3 = document.getElementById("caixa3");
const botao3 = document.getElementById("botao3");

// Adiciona um evento de clique no botão
botao.addEventListener("click", () => {
// Verifica se a caixa tem a classe "visivel"
if (caixa.classList.contains("visivel")) {
    // Troca a classe para "oculto"
    caixa.classList.replace("visivel", "oculto");
} else {
    // Troca a classe para "visivel"
    caixa.classList.replace("oculto", "visivel");
}
});

botao2.addEventListener("mouseout", () => {
    // Verifica se a caixa tem a classe "visivel"
    if (caixa2.classList.contains("visivel")) {
        // Troca a classe para "oculto"
        caixa2.classList.replace("visivel", "oculto");
    } 
});

botao2.addEventListener("mouseover", () => {
    // Verifica se a caixa tem a classe "visivel"
    if (caixa2.classList.contains("oculto")) {
        // Troca a classe para "oculto"
        caixa2.classList.replace("oculto", "visivel");
    } 
});

botao3.addEventListener("mouseover", () =>{
    caixa3.classList.replace("oculto", "visivel");
});

botao3.addEventListener("mouseout", () => {
    caixa3.classList.replace("visivel", "oculto");
});