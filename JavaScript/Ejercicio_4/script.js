// Resaltar sección activa en el menú
const menuLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 100;

    menuLinks.forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            menuLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        }
    });
});

// Scroll suave al hacer clic
menuLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
