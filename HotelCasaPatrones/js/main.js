const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? "1" : "0";
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Inicializa el primer slide visible
showSlide(currentSlide);

// Cambia de slide cada 5 segundos
setInterval(nextSlide, 6000);



