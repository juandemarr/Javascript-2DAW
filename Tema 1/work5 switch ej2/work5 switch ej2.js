/*Crea un script que pregunte al usuario por un número, y determine si es par, si es múltiplo de tres,
y si es múltiplo de 5*/
var numero=parseInt(prompt("Introduce un número"));

switch(true){
    case (numero%2==0):
        document.write("El numero "+numero+" es par");
        break;
    case (numero%3==0):
        document.write("El número "+numero+" es múltiplo de 3");
        break;
    case (numero%5==0):
        document.write("El número "+numero+" es múltiplo de 5");
        break;
    default:
        document.write("El número "+numero+" no es múltiplo de 2, 3 ni 5");
}