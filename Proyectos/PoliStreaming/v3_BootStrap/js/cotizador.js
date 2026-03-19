let servicios=JSON.parse(localStorage.getItem("servicios"))||{
netflix:10000,amazon:8000,plex:6000};

function cargarServicios(){
let s=document.getElementById("servicio");
s.innerHTML="";
for(let k in servicios){
let o=document.createElement("option");
o.value=k;o.text=k;
s.appendChild(o);
}
}

function cotizar(){
let s=document.getElementById("servicio").value;
let p=parseInt(document.getElementById("pantallas").value);
let m=parseInt(document.getElementById("meses").value);

let stock=parseInt(localStorage.getItem("stock"))||50;
let vendidos=parseInt(localStorage.getItem("vendidos"))||0;

if(p>stock){alert("Sin stock");return;}

let total=servicios[s]*p*m;

stock-=p;
vendidos+=p;

localStorage.setItem("stock",stock);
localStorage.setItem("vendidos",vendidos);

let historial=JSON.parse(localStorage.getItem("historial"))||[];
historial.push(s+" - $"+total);
localStorage.setItem("historial",JSON.stringify(historial));

document.getElementById("resultado").innerText="Total $"+total;

cargarEstadisticas();
cargarHistorial();
}

function agregarServicio(){
let u=JSON.parse(localStorage.getItem("usuario"));
if(u.rol!=="admin"){alert("Sin permisos");return;}

let n=document.getElementById("nuevoServicio").value;
let pr=parseInt(document.getElementById("precioServicio").value);

servicios[n]=pr;
localStorage.setItem("servicios",JSON.stringify(servicios));
location.reload();
}

function exportarExcel(){
let data=JSON.parse(localStorage.getItem("historial"))||[];
let csv="Ventas\n"+data.join("\n");

let blob=new Blob([csv]);
let a=document.createElement("a");
a.href=URL.createObjectURL(blob);
a.download="ventas.csv";
a.click();
}

function exportarPDF(){
const {jsPDF}=window.jspdf;
let doc=new jsPDF();
let data=JSON.parse(localStorage.getItem("historial"))||[];

doc.text("Reporte de Ventas",10,10);

data.forEach((item,i)=>{
doc.text(item,10,20+(i*10));
});

doc.save("ventas.pdf");
}