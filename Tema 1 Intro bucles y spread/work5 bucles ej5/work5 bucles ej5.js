/*Crea un script que pida al usuario 10 números, y muestre su suma en pantalla*/

var numero;
var suma=0;
for(let i=0; i<10; i++){
    numero=parseFloat(prompt("Introduce un número"));
    suma=suma+numero;
    if(i==9)
        document.write(numero+" = "+suma);
    else
        document.write(numero+" + ");
}