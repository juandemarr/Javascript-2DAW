/*Escribe las funciones para llevar a cabo las siguientes operaciones para un array 
de una dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.*/

var array=[];
array[9]='hola';
function zero(array){
    for(i=0; i<array.length; i++)
        array[i]=0;
    return array;
}
function masUno(array){
    for(i=0; i<array.length; i++){
        array[i]=array[i]+1;
    }
    return array;
}



document.write("Array original<br>");
array.forEach( (valor,posicion) => document.write("Indice: "+posicion+", valor: "+valor+"<br>"));

document.write("1. Establecer los 10 elementos a cero<br>");
zero(array).forEach( (i) => document.write(i+" "));

document.write("<br>Añadir 1 a cada uno de los elementos del array<br>");
masUno(array).forEach( (i) => document.write(i+" "));

//////////////OTRA FORMA
var array1=[1,2,3,4,5,6,7,8,9,10];
function ponerCero(array){
    return array1.map( elemento => elemento=0);
}
function ponerCero1(array){//para los 10 primeros
    return array1.map( (elemento,index) => {
        if(index<10) 
            return 0;//este return  machaca el elemento
        else
            return elemento;
    });
}
function ponerCero2(array){
    return array1.fill(0);//los pone todos a cero
}
