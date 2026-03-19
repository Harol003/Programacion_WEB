// ===============================
// ARRAY DE PRODUCTOS
// ===============================

let productos = [
{nombre:"MTB Pro", precio:900000},
{nombre:"Ruta Speed", precio:1200000},
{nombre:"Urbana City", precio:600000}
];


// ===============================
// 1. EVENTOS BASICOS
// ===============================

// mostrar mensaje
function mostrarMensaje(){
document.getElementById("resultado").innerText="Bienvenido a Poli Bici";
}


// ===============================
// 2. DOM (CAMBIAR ESTILO)
// ===============================

function cambiarColor(){
document.getElementById("resultado").style.background="lightblue";
}


// ===============================
// 3. ARRAYS (MOSTRAR PRODUCTOS)
// ===============================

function cargarProductos(){

let cont=document.getElementById("lista");

cont.innerHTML="";

// recorrer array
productos.forEach(p=>{
cont.innerHTML+=`<p>${p.nombre} - $${p.precio}</p>`;
});
}


// ===============================
// 4. BUSQUEDA
// ===============================

function buscarProducto(){

let texto=document.getElementById("busqueda").value.toLowerCase();

let cont=document.getElementById("lista");

cont.innerHTML="";

// filtrar
productos.forEach(p=>{

if(p.nombre.toLowerCase().includes(texto)){
cont.innerHTML+=`<p>${p.nombre}</p>`;
}

});
}


// ===============================
// 5. LOCALSTORAGE
// ===============================

// guardar dato
function guardarDato(){

localStorage.setItem("mensaje","Hola estudiante");

document.getElementById("resultado").innerText="Dato guardado";
}


// cargar dato
function cargarDato(){

let dato=localStorage.getItem("mensaje");

document.getElementById("resultado").innerText=dato;
}