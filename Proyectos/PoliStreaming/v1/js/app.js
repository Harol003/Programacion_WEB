// Esperar que cargue la pagina
document.addEventListener("DOMContentLoaded", function () {

    // Obtener usuario
    let usuario = localStorage.getItem("usuario");

    console.log("Usuario:", usuario);

    // Validar sesion
    if (!usuario) {
        window.location.href = "index.html";
        return;
    }

    // Mostrar bienvenida
    document.getElementById("bienvenida").innerText = "Bienvenido " + usuario;

    // Cargar historial
    cargarHistorial();
});

// Cerrar sesion
function cerrarSesion() {
    localStorage.removeItem("usuario");
    window.location.href = "index.html";
}

// Mostrar historial
function cargarHistorial() {

    let historial = JSON.parse(localStorage.getItem("historial")) || [];

    let lista = document.getElementById("historial");
    lista.innerHTML = "";

    historial.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        lista.appendChild(li);
    });
}