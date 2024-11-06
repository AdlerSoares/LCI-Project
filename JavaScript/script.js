let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.addEventListener('DOMContentLoaded', function() {
    // Garante que a página inicie no topo (header)
    window.scrollTo(0, 0);

    // Lógica para inicializar a rotação de slides
    showSlide(currentIndex);

    // Lógica de clique no botão "Seguros e Produtos"
    const button = document.getElementById('serviços-button');
    if (button) {
        button.addEventListener('click', handleScrollToSection);
    }
});

// Exibe o slide atual e ajusta os outros
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'next', 'prev');
        if (i === index) {
            slide.classList.add('active'); // A imagem atual
        } else if (i === (index + 1) % totalSlides) {
            slide.classList.add('next'); // A próxima imagem à direita
        } else if (i === (index - 1 + totalSlides) % totalSlides) {
            slide.classList.add('prev'); // A imagem anterior à esquerda
        }
    });
}

// Avança para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Muda a imagem a cada 10 segundos
setInterval(nextSlide, 10000);

// Seleciona a header
const header = document.querySelector('header');

// Função para verificar a posição do scroll e controlar a visibilidade da header
function checkScroll() {
    if (window.scrollY > 50) {
        header.classList.remove('show');
    } else {
        header.classList.add('show');
    }
}

// Chama a função assim que a página carrega para mostrar a header
window.addEventListener('load', () => {
    setTimeout(() => {
        header.classList.add('show'); // Animação de "cair" da header
    }, 200);
});

// A cada rolagem, verifica a posição do scroll
window.addEventListener('scroll', checkScroll);

// Lida com o clique no botão "Seguros e Produtos"
function handleScrollToSection(event) {
    event.preventDefault(); // Previne o comportamento padrão de navegação

    // Verifica se estamos na página principal
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
        // Se já estivermos na página correta, rola suavemente para a seção
        const targetSection = document.getElementById('serviços-produtos');
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop, // Rola até a posição da seção
                behavior: 'smooth' // Define o scroll suave
            });
        }
    } else {
        // Se estivermos em outra página, redireciona para a página principal com a âncora
        window.location.href = 'index.html#serviços-produtos';
    }
}

// Se houver um hash na URL, rola para a seção correspondente ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash) {
        // Se houver um hash na URL, rola suavemente para a seção correspondente
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop, // Rola até a posição da seção
                behavior: 'smooth' // Rolagem suave
            });

            // Remove o hash da URL para evitar comportamento indesejado de navegação
            history.replaceState(null, null, window.location.pathname);
        }
    }
});

document.getElementById('footer-logo-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    window.scrollTo({
        top: 0, // Rola até o topo da página
        behavior: 'smooth' // Rolagem suave
    });
});
