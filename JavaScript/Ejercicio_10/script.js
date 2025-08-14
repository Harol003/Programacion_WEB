function mostrarNombre() {
    let nombre = document.getElementById("nombreInput").value;

    if (nombre.trim() === "") {
        alert("Por favor, escribe tu nombre.");
        return;
    }

    // Cambiar el texto del saludo
    document.getElementById("saludo").textContent = "Hola " + nombre + " 👋";

    // Limpiar el input
    document.getElementById("nombreInput").value = "";
}
