// Selecciona todos los enlaces del menú
const menuLinks = document.querySelectorAll("nav ul li a");

// Detecta el scroll para resaltar el enlace activo
window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 100; // Ajuste para que se active antes de llegar al título

    menuLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));

        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            // Si la sección está visible, marcar como activo
            menuLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        }
    });
});
