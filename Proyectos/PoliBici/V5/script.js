// ===============================
// VARIABLES GLOBALES
// ===============================

// valor actual en pantalla
let pantalla="";

// operador actual
let operador="";

// primer numero
let num1=null;


// ===============================
// MOSTRAR EN PANTALLA
// ===============================

function actualizarPantalla(){

// si esta vacio mostrar 0
document.getElementById("pantalla").innerText = pantalla || "0";

}


// ===============================
// AGREGAR NUMERO
// ===============================

function agregarNumero(num){

pantalla += num;

actualizarPantalla();

}


// ===============================
// GUARDAR OPERACION
// ===============================

function operacion(op){

// guardar primer numero
num1 = parseFloat(pantalla);

// guardar operador
operador = op;

// limpiar pantalla
pantalla="";

}


// ===============================
// CALCULAR RESULTADO
// ===============================

function calcular(){

let num2 = parseFloat(pantalla);

// validar
if(num1===null || isNaN(num2)){
alert("Operacion invalida");
return;
}

let resultado=0;

// operaciones
if(operador==="+") resultado = num1 + num2;
if(operador==="-") resultado = num1 - num2;
if(operador==="*") resultado = num1 * num2;
if(operador==="/"){

if(num2==0){
alert("No se puede dividir por cero");
return;
}

resultado = num1 / num2;
}

// guardar en historial
guardarHistorial(num1 + " " + operador + " " + num2 + " = " + resultado);

// mostrar resultado
pantalla = resultado.toString();

actualizarPantalla();

// reset
num1=null;
operador="";

}


// ===============================
// LIMPIAR
// ===============================

function limpiar(){

pantalla="";
num1=null;
operador="";
actualizarPantalla();

}


// ===============================
// HISTORIAL (LOCALSTORAGE)
// ===============================

function guardarHistorial(texto){

let historial = JSON.parse(localStorage.getItem("historial")) || [];

historial.push(texto);

localStorage.setItem("historial", JSON.stringify(historial));

mostrarHistorial();

}


// mostrar historial
function mostrarHistorial(){

let cont=document.getElementById("historial");

let historial = JSON.parse(localStorage.getItem("historial")) || [];

cont.innerHTML="";

historial.forEach(h=>{
cont.innerHTML += `<p>${h}</p>`;
});

}


// limpiar historial
function limpiarHistorial(){

localStorage.removeItem("historial");

mostrarHistorial();

}


// ===============================
// INICIO
// ===============================

window.onload=function(){

actualizarPantalla();
mostrarHistorial();

};