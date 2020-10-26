/*Crea un script que pida un número al usuario, y si ese número es superior a 1000
le aplique un descuento del 15%, mostrando el nuevo número en pantalla.*/
var numero=prompt("Introduce el precio:");

if(numero>100){
    let total=numero-(numero*0.15);
    document.write("Con el desceunto se queda en: "+total.toFixed(2)+"€");
}else
    document.write("No tiene descuento :(");
