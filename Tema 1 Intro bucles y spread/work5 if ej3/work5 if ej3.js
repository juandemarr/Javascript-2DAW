/*Crea un script que reciba la edad de un usario, y su localidad de nacimiento
y muestre en pantalla "Enhorabuena" a los usuarios de más de 25 años de Madrid*/
var edad=parseInt(prompt("Introduce tu edad"));
var ciudad=prompt("Introduce tu localidad de nacimiento");

if(edad==25 && (ciudad=="Madrid" || ciudad=="madrid"))
    document.write("Enhorabuena!!");