/*Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas.*/
var cadena=prompt("Introduzca una cadena de palabras");

function analizarMayMin(cad_arg){
    var cadenaMinuscula=""+cadena.toLowerCase();
    var cadenaMayuscula=""+cadena.toUpperCase();
    if(cad_arg===cadenaMinuscula)
        document.write("La cadena tiene solo minusculas<br>");
    else if(cad_arg===cadenaMayuscula)
        document.write("La cadena tiene solo mayúsculas<br>");
    else
        document.write("La cadena tiene mayúsculas y minúsculas");
}
analizarMayMin(cadena);