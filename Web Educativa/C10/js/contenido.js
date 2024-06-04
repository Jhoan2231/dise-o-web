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
    //const nombre = document.querySelector("#nombre").value;
    //const nota =document.querySelector("#nota").value;
    //const notaINT = parseInt(nota);
    //const respuesta = document.getElementById("datos");
    //if (notaINT >= 3){
        //respuesta.textContent = `${nombre} has aprobado el examen!`
        //respuesta.style.color = "green";
    //}else{
        //respuesta.textContent = `${nombre} no has aprobado el examen.`;
        //respuesta.style.color = "red";
    //}
//}