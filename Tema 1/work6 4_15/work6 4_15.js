/*Escribe un programa en Javascript que consista en adivinar un número previamente introducido
por teclado (jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador 2. Solamente
terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicáncole si su número es mayor o menor que el número a
adivinar.*/

var num_adivinar=parseInt(prompt("Introduzce un número (JUGADOR 1)"));
var num=parseInt(prompt("Adivina el número (JUGADOR 2)"));

while(num!=num_adivinar){
    if(num>num_adivinar)
        alert("El número está por debajo");
    else
        alert("El número está por encima");
    num=parseInt(prompt("Adivina el número (JUGADOR 2)"));
}
alert("VICTORIAAAAA!!!!!!!!!!");