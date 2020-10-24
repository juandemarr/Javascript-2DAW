/*Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.Para ello
define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6.*/
function lanzamiento(){
    return (Math.floor(Math.random()*6)+1);
}
function pregunta(){
var opcion=prompt("¿Quieres lanzar un dado? (s/n)");
if(opcion=='s' || opcion=='S'){
    document.write("LANZAMIENTO DE DADO<br>");
    document.write(lanzamiento()+"<br>");
    pregunta();
}
}
pregunta();//como bucle while