//aquí se creara un saludo segun la hora
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'buenas noches!';
} else if (hourNow > 12) {
    greeting = 'buenas tardes!';
} else if (hourNow > 0) {
    greeting = 'buenos días!';
} else {
    greeting = 'Bienvenido!';
}
document.write('<h3>' + greeting + '</h3>');