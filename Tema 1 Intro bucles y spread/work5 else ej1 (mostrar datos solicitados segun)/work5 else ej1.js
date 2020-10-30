/*Crea un script que pida al usuario su nombre y apellidos. Si el nombre es "Ricardo",
debe mostrar en pantalla los apellidos; si es nombre no es "Ricardo", debe escribir en el 
documento HTML los apellidos.*/
var nombre=prompt("Introduzca el nombre");
var apellidos=prompt("Introduzca los apellidos");

if(nombre=="Ricardo" || nombre=="ricardo")
    alert(apellidos);
else
    document.write(apellidos);
    