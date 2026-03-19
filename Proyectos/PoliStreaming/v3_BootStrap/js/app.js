document.addEventListener("DOMContentLoaded",()=>{

let u=JSON.parse(localStorage.getItem("usuario"));
if(!u){window.location="index.html";return;}

document.getElementById("bienvenida").innerText=u.user+" ("+u.rol+")";

if(u.rol!=="admin") document.getElementById("adminPanel").style.display="none";
if(u.rol==="cliente") document.getElementById("statsPanel").style.display="none";

cargarServicios();
cargarEstadisticas();
cargarHistorial();
});

function cerrarSesion(){
localStorage.clear();
window.location="index.html";
}

function cargarEstadisticas(){
let v=localStorage.getItem("vendidos")||0;
let s=localStorage.getItem("stock")||50;
document.getElementById("vendidos").innerText=v;
document.getElementById("stock").innerText=s;
}

function cargarHistorial(){
let h=JSON.parse(localStorage.getItem("historial"))||[];
let ul=document.getElementById("historial");
ul.innerHTML="";
h.forEach(x=>{
let li=document.createElement("li");
li.innerText=x;
ul.appendChild(li);
});
}