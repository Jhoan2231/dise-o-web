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

//formulario.addEventListener("submit", enviar);
//function enviar(e){
    //e.preventDefault();
    //const num1 = document.querySelector("#num1").value;
    //const num2 =document.querySelector("#num2").value;
    //const resultado = parseInt(num1) + parseInt(num2);

    //const respuesta = document.getElementById("datos");
    //respuesta.textContent = `El resultado de la suma es: ${resultado}`;
//}