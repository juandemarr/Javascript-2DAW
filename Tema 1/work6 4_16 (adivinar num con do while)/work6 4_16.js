/*Adapta el ejercicio 4.15 al bucle do...while*/
var num_adivinar=parseInt(prompt("Introduzce un número (JUGADOR 1)"));
var num=parseInt(prompt("Adivina el número (JUGADOR 2)"));

do{
    if(num>num_adivinar)
        alert("El número está por debajo");
    else
        alert("El número está por encima");
    num=parseInt(prompt("Adivina el número (JUGADOR 2)"));
}while(num!=num_adivinar);
alert("VICTORIAAAAA!!!!!!!!!!");