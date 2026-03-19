// "Base de datos" simulada
const usuarios = [
    { user: "admin", pass: "1234", rol: "admin" },
    { user: "juan", pass: "1234", rol: "vendedor" },
    { user: "ana", pass: "1234", rol: "vendedor" }
];

// Funcion login
function login() {

    let user = document.getElementById("usuario").value.trim();
    let pass = document.getElementById("password").value.trim();

    // Buscar usuario
    let encontrado = usuarios.find(u => u.user === user && u.pass === pass);

    if (encontrado) {
        localStorage.setItem("usuario", JSON.stringify(encontrado));
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("mensaje").innerText = "Datos incorrectos";
    }
}