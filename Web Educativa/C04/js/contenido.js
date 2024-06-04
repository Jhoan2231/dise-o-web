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

//// Función que contiene el mensaje que aparecerá al dar click en el botón 'Haz click aquí'
function alerta(){
    alert('Esto es codigo JavaScript Ejecutado dentro de una función');
};