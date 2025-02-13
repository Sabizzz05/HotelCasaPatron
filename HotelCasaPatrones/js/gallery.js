document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".gallery-item");
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");
    let currentIndex = 0;

    // Abrir modal al hacer clic en una imagen
    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            currentIndex = index;
        });
    });

    // Cerrar modal
    document.querySelector(".close").addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cambiar imagen con flechas
    function changeImage(step) {
        currentIndex += step;
        if (currentIndex < 0) currentIndex = images.length - 1;
        if (currentIndex >= images.length) currentIndex = 0;
        modalImg.src = images[currentIndex].src;
    }

    document.querySelector(".prev").addEventListener("click", function () {
        changeImage(-1);
    });

    document.querySelector(".next").addEventListener("click", function () {
        changeImage(1);
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
