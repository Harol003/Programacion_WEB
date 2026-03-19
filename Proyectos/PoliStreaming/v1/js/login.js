// Funcion login
function login() {

    let usuario = document.getElementById("usuario").value.trim();
    let password = document.getElementById("password").value.trim();

    // Validacion
    if (usuario === "admin" && password === "1234") {

        // Guardar usuario (SIN JSON)
        localStorage.setItem("usuario", usuario);

        // Redireccion segura
        window.location.href = "dashboard.html";

    } else {
        document.getElementById("mensaje").innerText = "Datos incorrectos";
    }
}