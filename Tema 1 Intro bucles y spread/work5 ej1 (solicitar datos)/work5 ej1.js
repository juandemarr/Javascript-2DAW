/*1. Crea un script que pregunte tu nombre, apellidos y tu edad y los 
muestre en la página web en párrafos distintos*/
var nombre=prompt("Introduce tu nombre");
var apellidos=prompt("Introduce tus apellidos");
var edad=parseInt(prompt("Introduce tu edad"));

document.write("<p><b>Nombre: </b>"+nombre+"</p>");
document.write("<p><b>Apellidos: </b>"+apellidos+"</p>");
document.write("<p><b>Edad: </b>"+edad+"</p>");
