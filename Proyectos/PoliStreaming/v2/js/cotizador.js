let servicios = JSON.parse(localStorage.getItem("servicios")) || {
    netflix: 10000,
    amazon: 8000,
    plex: 6000
};

function cotizar() {

    let servicio = document.getElementById("servicio").value;
    let pantallas = parseInt(document.getElementById("pantallas").value);
    let meses = parseInt(document.getElementById("meses").value);

    let stock = parseInt(localStorage.getItem("stock")) || 50;
    let vendidos = parseInt(localStorage.getItem("vendidos")) || 0;

    if (!pantallas || pantallas <= 0) {
        alert("Cantidad invalida");
        return;
    }

    if (pantallas > stock) {
        alert("No hay stock");
        return;
    }

    let total = servicios[servicio] * pantallas * meses;

    // actualizar inventario
    stock -= pantallas;
    vendidos += pantallas;

    localStorage.setItem("stock", stock);
    localStorage.setItem("vendidos", vendidos);

    let texto = `Servicio: ${servicio} | Pantallas: ${pantallas} | Total: $${total}`;

    document.getElementById("resultado").innerText = texto;

    let historial = JSON.parse(localStorage.getItem("historial")) || [];
    historial.push(texto);

    localStorage.setItem("historial", JSON.stringify(historial));

    cargarHistorial();
    cargarEstadisticas();
}

// ADMIN agrega servicios
function agregarServicio() {

    let nombre = document.getElementById("nuevoServicio").value;
    let precio = parseInt(document.getElementById("precioServicio").value);

    if (!nombre || !precio) {
        alert("Datos invalidos");
        return;
    }

    servicios[nombre] = precio;

    localStorage.setItem("servicios", JSON.stringify(servicios));

    alert("Servicio agregado");

    location.reload();
}