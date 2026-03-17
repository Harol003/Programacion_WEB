// ===============================
// ARRAY DE IMAGENES Y PRODUCTOS
// ===============================
let productos = [
{
nombre:"MTB Pro",
descripcion:"Bicicleta de montaña profesional para todos los terrenos.",
imagen:"img/mtb.jpg"
},
{
nombre:"Ruta Speed",
descripcion:"Bicicleta de ruta ligera y veloz.",
imagen:"img/ruta.jpg"
},
{
nombre:"Urbana City",
descripcion:"Bicicleta urbana para ciudad.",
imagen:"img/urbana.jpg"
},
{
nombre:"Niños Bike",
descripcion:"Bicicletas para niños seguras y divertidas.",
imagen:"img/niños.jpg"
},
{
nombre:"Hibrida Comfort",
descripcion:"Bicicleta híbrida cómoda y estable.",
imagen:"img/hibrida.jpg"
},
{
nombre:"Carrera Pro",
descripcion:"Bicicleta de carrera para velocidad máxima.",
imagen:"img/carrera.jpg"
}
];

let indice = 0; // indice inicial del carrusel

// ===============================
// FUNCION PARA MOSTRAR IMAGEN ACTUAL
// ===============================
function mostrarProducto(){
let producto = productos[indice];
document.getElementById("carrusel-img").src = producto.imagen;
document.getElementById("detalle").innerHTML =
`<h3>${producto.nombre}</h3><p>${producto.descripcion}</p>`;
}

// ===============================
// BOTONES DE CARRUSEL
// ===============================
function siguiente(){
indice++;
if(indice >= productos.length) indice = 0;
mostrarProducto();
}

function anterior(){
indice--;
if(indice < 0) indice = productos.length -1;
mostrarProducto();
}

// ===============================
// INICIALIZAR CARRUSEL
// ===============================
window.onload = mostrarProducto;