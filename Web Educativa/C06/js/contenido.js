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


//function accionInnerHTML(){
    //var conseguirdatoinicial= document.getElementById("divcontenedor").innerHTML;//leer valor
    //document.getElementById("textoresultante").innerHTML=`<br>el texto inicial es: ${conseguirdatoinicial}`;//asignar valor
//}