/*Crea un script que pregunte al usuario el número de hermanos que tiene y una cantidad.
En el caso de que el usuario tenga más de tres hermanos, se mostrará la cantidad con un 15% de descuento.
Si el usuario tienen menos de 3 hermanos, se mostrará la cantidad con un 5% de descuento. Si no tiene hermanos
se mostrará la cantidad sin descuento.*/
var hermanos=0;
var cantidad=0;
var total=0;

hermanos=prompt("¿Cuántos hermanos tienes?");
cantidad=prompt("Introduce una cantidad");

while(hermanos<0)
    hermanos=prompt("¿Cuántos hermanos tienes?");

while(cantidad <0)
cantidad=prompt("Introduce una cantidad");

if(hermanos>=3){
    total=cantidad-(cantidad*0.15);
    document.write(total);
}else if(hermanos>0){
    total=cantidad-(cantidad*0.05);
    document.write(total);
}else if(hermanos==0)
    document.write(cantidad);
    