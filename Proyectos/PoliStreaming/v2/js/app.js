document.addEventListener("DOMContentLoaded", function () {

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
        window.location.href = "index.html";
        return;
    }

    // Mostrar nombre
    document.getElementById("bienvenida").innerText =
        "Bienvenido " + usuario.user + " (" + usuario.rol + ")";

    // Ocultar panel admin si no es admin
    if (usuario.rol !== "admin") {
        document.getElementById("adminPanel").style.display = "none";
    }

    cargarServicios();
    cargarHistorial();
    cargarEstadisticas();
});

function cerrarSesion() {
    localStorage.removeItem("usuario");
    window.location.href = "index.html";
}

// Historial
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

// Estadisticas
function cargarEstadisticas() {

    let vendidos = localStorage.getItem("vendidos") || 0;
    let stock = localStorage.getItem("stock") || 50;

    document.getElementById("vendidos").innerText = vendidos;
    document.getElementById("stock").innerText = stock;
}

// Servicios en select
function cargarServicios() {

    let servicios = JSON.parse(localStorage.getItem("servicios")) || {
        netflix: 10000,
        amazon: 8000,
        plex: 6000
    };

    let select = document.getElementById("servicio");
    select.innerHTML = "";

    for (let key in servicios) {
        let option = document.createElement("option");
        option.value = key;
        option.text = key;
        select.appendChild(option);
    }
}