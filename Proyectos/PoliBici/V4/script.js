// ===============================
// FUNCION PARA OBTENER NUMEROS
// ===============================

function obtenerNumeros(){

// obtener valores del input
let n1=parseFloat(document.getElementById("num1").value);
let n2=parseFloat(document.getElementById("num2").value);

// validar datos
if(isNaN(n1) || isNaN(n2)){
alert("Ingrese numeros validos");
return null;
}

return {n1,n2};
}


// ===============================
// OPERACIONES
// ===============================

// suma
function sumar(){

let datos=obtenerNumeros();
if(!datos) return;

let resultado=datos.n1 + datos.n2;

mostrarResultado(resultado);
}


// resta
function restar(){

let datos=obtenerNumeros();
if(!datos) return;

let resultado=datos.n1 - datos.n2;

mostrarResultado(resultado);
}


// multiplicacion
function multiplicar(){

let datos=obtenerNumeros();
if(!datos) return;

let resultado=datos.n1 * datos.n2;

mostrarResultado(resultado);
}


// division
function dividir(){

let datos=obtenerNumeros();
if(!datos) return;

// validar division por cero
if(datos.n2==0){
alert("No se puede dividir por cero");
return;
}

let resultado=datos.n1 / datos.n2;

mostrarResultado(resultado);
}


// ===============================
// MOSTRAR RESULTADO
// ===============================

function mostrarResultado(valor){

document.getElementById("resultado").innerText="Resultado: " + valor;

}


// ===============================
// FUNCIONES JS BASICAS
// ===============================

// ALERT
function usarAlert(){
alert("Este es un mensaje de alerta");
}


// PROMPT
function usarPrompt(){

let nombre=prompt("Ingrese su nombre");

if(nombre){
document.getElementById("resultado").innerText="Hola " + nombre;
}

}


// CONFIRM
function usarConfirm(){

let respuesta=confirm("Desea continuar?");

if(respuesta){
document.getElementById("resultado").innerText="El usuario acepto";
}else{
document.getElementById("resultado").innerText="El usuario cancelo";
}

}


// ===============================
// DOM
// ===============================

// cambiar color
function cambiarColor(){
document.getElementById("resultado").style.background="lightgreen";
}


// limpiar
function limpiar(){

document.getElementById("num1").value="";
document.getElementById("num2").value="";
document.getElementById("resultado").innerText="Resultado aqui";

}