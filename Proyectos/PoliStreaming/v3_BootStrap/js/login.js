const usuarios=[
{user:"admin",pass:"1234",rol:"admin"},
{user:"juan",pass:"1234",rol:"vendedor"},
{user:"cliente",pass:"1234",rol:"cliente"}
];

function login(){
let u=document.getElementById("usuario").value;
let p=document.getElementById("password").value;

let user=usuarios.find(x=>x.user===u && x.pass===p);

if(user){
localStorage.setItem("usuario",JSON.stringify(user));
window.location="dashboard.html";
}else{
document.getElementById("mensaje").innerText="Error";
}
}