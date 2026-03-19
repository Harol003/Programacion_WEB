// ===============================
// FUNCION CENTRAL (SIEMPRE ACTUALIZA)
// ===============================

function obtenerProductos(){
return JSON.parse(localStorage.getItem("productos")) || [
{nombre:"MTB Pro", precio:900000},
{nombre:"Ruta Speed", precio:1200000},
{nombre:"Urbana City", precio:600000}
];
}

// carrito (cotizacion)
let carrito = [];


// ===============================
// INICIO GENERAL
// ===============================
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
mostrarCotizacionAdmin();
}

};


// ===============================
// PRODUCTOS
// ===============================

// cargar productos desde localStorage
function cargarProductos(){

let cont = document.getElementById("listaProductos");
if(!cont) return;

let productos = obtenerProductos();

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


// agregar al carrito
function agregar(i){

let productos = obtenerProductos();

carrito.push(productos[i]);

guardarCarrito();
mostrarCarrito();
}


// mostrar carrito
function mostrarCarrito(){

let cont=document.getElementById("carrito");
let total=0;

if(!cont) return;

cont.innerHTML="";

carrito.forEach(p=>{
cont.innerHTML+=`<p>${p.nombre} - $${p.precio}</p>`;
total+=p.precio;
});

let totalSpan=document.getElementById("total");
if(totalSpan){
totalSpan.innerText=total;
}
}


// guardar carrito
function guardarCarrito(){
localStorage.setItem("carrito", JSON.stringify(carrito));
}


// cargar carrito
function cargarCarrito(){

let datos=localStorage.getItem("carrito");

if(datos){
carrito=JSON.parse(datos);
}

mostrarCarrito();
}


// vaciar carrito
function vaciarCarrito(){
carrito=[];
guardarCarrito();
mostrarCarrito();
}


// ===============================
// LOGIN
// ===============================

function login(){

let u=document.getElementById("usuario").value;
let c=document.getElementById("clave").value;

if(u=="admin" && c=="1234"){
localStorage.setItem("sesion","activa");
mostrarPanel();
}else{
document.getElementById("mensaje").innerText="Usuario o clave incorrectos";
}
}


// verificar sesion
function verificarSesion(){
if(localStorage.getItem("sesion")=="activa"){
mostrarPanel();
}
}


// mostrar panel
function mostrarPanel(){

let loginDiv=document.getElementById("loginDiv");
let panel=document.getElementById("panelAdmin");

if(loginDiv) loginDiv.classList.add("oculto");
if(panel) panel.classList.remove("oculto");
}


// cerrar sesion
function cerrarSesion(){
localStorage.removeItem("sesion");
location.reload();
}


// ===============================
// ADMIN PRODUCTOS (TABLA)
// ===============================

// mostrar productos en admin
function mostrarProductosAdmin(){

let cont=document.getElementById("adminProductos");
if(!cont) return;

let productos = obtenerProductos();

cont.innerHTML="";

productos.forEach((p,i)=>{
cont.innerHTML+=`
<tr>
<td>${p.nombre}</td>
<td>$${p.precio}</td>
<td>
<button onclick="eliminarProducto(${i})">Eliminar</button>
</td>
</tr>
`;
});
}


// agregar producto
function agregarProducto(){

let nombre=document.getElementById("nombreProd").value;
let precio=parseInt(document.getElementById("precioProd").value);

if(nombre=="" || isNaN(precio)){
alert("Ingrese datos validos");
return;
}

let productos = obtenerProductos();

productos.push({nombre,precio});

localStorage.setItem("productos", JSON.stringify(productos));

mostrarProductosAdmin();
cargarProductos();

// limpiar campos
document.getElementById("nombreProd").value="";
document.getElementById("precioProd").value="";
}


// eliminar producto
function eliminarProducto(i){

let productos = obtenerProductos();

productos.splice(i,1);

localStorage.setItem("productos", JSON.stringify(productos));

mostrarProductosAdmin();
cargarProductos();
}


// ===============================
// COTIZACION EN ADMIN
// ===============================

function mostrarCotizacionAdmin(){

let cont=document.getElementById("tablaCotizacion");
let total=0;

if(!cont) return;

cont.innerHTML="";

// cargar carrito actualizado
let datos=localStorage.getItem("carrito");

if(datos){
carrito=JSON.parse(datos);
}

carrito.forEach(p=>{
cont.innerHTML+=`
<tr>
<td>${p.nombre}</td>
<td>$${p.precio}</td>
</tr>
`;
total+=p.precio;
});

let totalAdmin=document.getElementById("totalAdmin");
if(totalAdmin){
totalAdmin.innerText=total;
}
}


// ===============================
// EXPORTACIONES
// ===============================

// PDF
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


// EXCEL
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


// ===============================
// CONTACTO
// ===============================

function enviarMensaje(){

let nombre=document.getElementById("nombre").value;
let correo=document.getElementById("correo").value;
let mensaje=document.getElementById("mensajeTexto").value;

if(nombre=="" || correo=="" || mensaje==""){
document.getElementById("respuesta").innerText="Complete todos los campos";
return;
}

document.getElementById("respuesta").innerText="Mensaje enviado correctamente";

// limpiar campos
document.getElementById("nombre").value="";
document.getElementById("correo").value="";
document.getElementById("mensajeTexto").value="";
}