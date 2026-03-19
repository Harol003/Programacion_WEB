// FUNCION PARA CAPTURAR CLICK EN MENU
const items = document.querySelectorAll('.menu-vertical a');

items.forEach(item=>{
  item.addEventListener('click', function(e){
    e.preventDefault(); // prevenir navegacion
    const nombre = this.textContent;
    document.getElementById('detalle').innerHTML = "Haz seleccionado: " + nombre;
  });
});