const imagens = document.querySelectorAll(".imagem-insta");
let indexAtual = 0; // Começa pela primeira imagem

function trocaImagem() {
    // Remove a classe "ativo" de todas as imagens
    imagens.forEach((img) => img.classList.remove("ativo"));

    // Adiciona a classe "ativo" na imagem atual
    imagens[indexAtual].classList.add("ativo");

    // Atualiza o índice para a próxima imagem
    indexAtual = (indexAtual + 1) % imagens.length;
}

// Troca a imagem a cada 3 segundos
setInterval(trocaImagem, 3000);
