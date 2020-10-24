/*Crea un script que pida al usuario un número, e imprima en el documento HTML
todos los números desde el número introducido por el usuario hasta el 100.*/
var numero=parseInt(prompt("Introduce un número"));
while(numero<=100){
    document.write(numero+"<br/>");
    numero++;
}