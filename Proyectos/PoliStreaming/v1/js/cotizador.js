// Precios base
const precios = {
    netflix: 10000,
    amazon: 8000,
    plex: 6000
};

// Funcion cotizar
function cotizar() {

    let servicio = document.getElementById("servicio").value;
    let pantallas = parseInt(document.getElementById("pantallas").value);
    let meses = parseInt(document.getElementById("meses").value);

    if (!pantallas || pantallas <= 0) {
        alert("Ingrese cantidad valida");
        return;
    }

    let total = precios[servicio] * pantallas * meses;

    // Descuento
    if (meses === 6) {
        total *= 0.9;
    }

    let texto = `Servicio: ${servicio} | Pantallas: ${pantallas} | Total: $${total}`;

    document.getElementById("resultado").innerText = texto;

    // Guardar historial
    let historial = JSON.parse(localStorage.getItem("historial")) || [];
    historial.push(texto);

    localStorage.setItem("historial", JSON.stringify(historial));

    cargarHistorial();
}