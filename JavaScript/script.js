let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);

    showSlide(currentIndex);

    const button = document.getElementById('serviços-button');
    if (button) {
        button.addEventListener('click', handleScrollToSection);
    }
});

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


setInterval(nextSlide, 10000);

const header = document.querySelector('header');

function checkScroll() {
    if (window.scrollY > 50) {
        header.classList.remove('show');
    } else {
        header.classList.add('show');
    }
}


window.addEventListener('load', () => {
    setTimeout(() => {
        header.classList.add('show'); 
    }, 200);
});


window.addEventListener('scroll', checkScroll);


function handleScrollToSection(event) {
    event.preventDefault(); 

    // Verifica se estamos na página principal
    if (window.location.pathname === "/index.html" || window.location.pathname === "/") {
        // Se já estivermos na página correta, rola suavemente para a seção
        const targetSection = document.getElementById('serviços-produtos');
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop, 
                behavior: 'smooth' 
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
                top: targetSection.offsetTop, 
                behavior: 'smooth' 
            });

            // Remove o hash da URL para evitar comportamento indesejado de navegação
            history.replaceState(null, null, window.location.pathname);
        }
    }
});

document.getElementById('footer-logo-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' 
    });
});
