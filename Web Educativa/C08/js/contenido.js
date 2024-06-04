//// Aquí se creará un saludo según la hora

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Buenas noches!';
} else if (hourNow > 12) {
    greeting = 'Buenas tardes!';
} else if (hourNow > 0) {
    greeting = 'Buenos dias!';
} else {
    greeting = 'Bienvenido!';
}
document.write('<h3>' + greeting + '</h3>')

//const formulario = document.querySelector("#formulario");

///formulario.addEventListener("submit", enviar);
//function enviar(e){
   // e.preventDefault();
    //const nombre = document.querySelector("#nombre").value;
   // const edad =document.querySelector("#edad").value;
   // const altura = document.querySelector("#altura").value;
   // const estado_civil = document.querySelector("#estadocivil").value;

   // const respuesta = document.getElementById("datos");
   // respuesta.textContent = `Datos enviados: Nombre: ${nombre}, Edad: ${edad}, Altura: ${altura}, Estado civil: ${estado_civil}`;
//}