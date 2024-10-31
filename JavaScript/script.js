let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

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

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 10000); // Muda a imagem a cada 12 segundos
showSlide(currentIndex);

document.getElementById('back-to-top').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    window.scrollTo({
        top: 0, // Rolagem para o topo
        behavior: 'smooth' // Rolagem suave
    });
});
