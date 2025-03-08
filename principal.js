// Puedes agregar efectos o interactividad aquí
document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll(".photo");
    photos.forEach(photo => {
        photo.addEventListener("mouseover", () => {
            photo.style.transform = "scale(1.05)";
            photo.style.transition = "transform 0.3s ease";
        });
        photo.addEventListener("mouseout", () => {
            photo.style.transform = "scale(1)";
        });
    });
});
