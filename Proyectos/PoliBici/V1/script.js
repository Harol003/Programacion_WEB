// PRODUCTOS BASE
let productos = JSON.parse(localStorage.getItem("productos")) || [
{nombre:"MTB Pro", precio:900000},
{nombre:"Ruta Speed", precio:1200000},
{nombre:"Urbana City", precio:600000}
];

let carrito = [];

// INICIO
window.onload = function(){

// PAGINA PRODUCTOS
if(document.getElementById("listaProductos")){
cargarProductos();
cargarCarrito();
}

// PAGINA ADMIN
if(document.getElementById("panelAdmin")){
verificarSesion();
mostrarProductosAdmin();
}
};

// ---------------- PRODUCTOS ----------------

function cargarProductos(){
let cont = document.getElementById("listaProductos");
cont.innerHTML="";

productos.forEach((p,i)=>{
cont.innerHTML+=`
<div class="producto">
<h3>${p.nombre}</h3>
<p>$${p.precio}</p>
<button onclick="agregar(${i})">Agregar</button>
</div>
`;
});
}

function agregar(i){
carrito.push(productos[i]);
guardarCarrito();
mostrarCarrito();
}

function mostrarCarrito(){
let cont=document.getElementById("carrito");
let total=0;

cont.innerHTML="";

carrito.forEach(p=>{
cont.innerHTML+=`<p>${p.nombre} - $${p.precio}</p>`;
total+=p.precio;
});

document.getElementById("total").innerText=total;
}

function guardarCarrito(){
localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarrito(){
let datos=localStorage.getItem("carrito");
if(datos){
carrito=JSON.parse(datos);
mostrarCarrito();
}
}

function vaciarCarrito(){
carrito=[];
guardarCarrito();
mostrarCarrito();
}

// ---------------- LOGIN ----------------

function login(){
let u=document.getElementById("usuario").value;
let c=document.getElementById("clave").value;

if(u=="admin" && c=="1234"){
localStorage.setItem("sesion","activa");
mostrarPanel();
}else{
document.getElementById("mensaje").innerText="Error";
}
}

function verificarSesion(){
if(localStorage.getItem("sesion")=="activa"){
mostrarPanel();
}
}

function mostrarPanel(){
document.getElementById("loginDiv").classList.add("oculto");
document.getElementById("panelAdmin").classList.remove("oculto");
}

function cerrarSesion(){
localStorage.removeItem("sesion");
location.reload();
}

// ---------------- ADMIN PRODUCTOS ----------------

function agregarProducto(){
let nombre=document.getElementById("nombreProd").value;
let precio=parseInt(document.getElementById("precioProd").value);

productos.push({nombre,precio});

localStorage.setItem("productos", JSON.stringify(productos));

mostrarProductosAdmin();
cargarProductos();
}

function mostrarProductosAdmin(){
let cont=document.getElementById("adminProductos");
if(!cont) return;

cont.innerHTML="";

productos.forEach((p,i)=>{
cont.innerHTML+=`
<p>${p.nombre} - $${p.precio}
<button onclick="eliminarProducto(${i})">Eliminar</button>
</p>
`;
});
}

function eliminarProducto(i){
productos.splice(i,1);
localStorage.setItem("productos", JSON.stringify(productos));
mostrarProductosAdmin();
}

// ---------------- EXPORTACIONES ----------------

function exportarPDF(){
const { jsPDF } = window.jspdf;
let doc=new jsPDF();

let y=10;

carrito.forEach(p=>{
doc.text(p.nombre+" $"+p.precio,10,y);
y+=10;
});

doc.save("cotizacion.pdf");
}

function exportarExcel(){
let datos=[["Producto","Precio"]];

carrito.forEach(p=>{
datos.push([p.nombre,p.precio]);
});

let hoja=XLSX.utils.aoa_to_sheet(datos);
let libro=XLSX.utils.book_new();

XLSX.utils.book_append_sheet(libro, hoja, "Cotizacion");
XLSX.writeFile(libro,"cotizacion.xlsx");
}