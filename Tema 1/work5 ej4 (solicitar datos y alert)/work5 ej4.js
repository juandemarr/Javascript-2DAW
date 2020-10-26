/*Crea un script que pida al usuario su edad, nombre, apellidos y ciclo
que estudia, y muestre esa información en pantalla en una 
ventana emergente*/

var edad=parseInt(prompt("Introduce tu edad"));
var nombre=prompt("Introduce tu nombre");
var apellidos=prompt("Introduce tus apellidos");
var ciclo=prompt("introduce el ciclo que estudias");

alert("Edad: "+edad+"\nNombre: "+nombre+"\nApellidos: "+apellidos+"\nCiclo: "+ciclo);
//<br/> es pa hacer saltos de linea en html (dentro de document.write por ejemplo)
//mientras que \n hace saltos de linea en javascript (en un alert por ejemplo)