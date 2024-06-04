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

//function contenidoVariables(){
    //var nombre = "Roberto";
    //var edad = 22;
    //var altura = 1.78;
    //var estado_civil = "Soltero";
    //document.getElementById("paragraph").innerHTML = `Nombre: ${nombre}<br>Edad: ${edad}<br>Altura: ${altura}<br>Estado civil: ${estado_civil}`;
//}
//function init(){
    //let mainTemplate = document.getElementById("main");
    //let parent = document.createElement("div");
    //parent.append(mainTemplate.content.cloneNode(true));
    //document.body.append(parent);
//}
//document.onload = init();