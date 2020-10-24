/*Crea un script que reciba la edad de un usuario y determine si puede jubilarse o no
(la jubilación se alcanza con 67 años).*/
var edad=parseInt(prompt("Introduce la edad"));

if(edad >= 67)
    document.write("Puede jubilarse :)");
else
    document.write("No puede jubilarse :(");