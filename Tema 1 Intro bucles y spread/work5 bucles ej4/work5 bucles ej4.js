/*Crea un script que imprima en el documento HTML todas las palabras introducidas
por el usuairo. El script debe terminar cuando el usuario introduzca la palabra "SALIR"*/
var palabra=prompt("Introduzca una palabra (SALIR para cerrar)");
while(palabra!="SALIR"){
    document.write(palabra+"<br/>");
    palabra=prompt("Introduzca una palabra (SALIR para cerrar)");
}