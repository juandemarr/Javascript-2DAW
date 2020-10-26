/*Crea las siguientes funciones y llámalas desde una página XHTML para mostrar  
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra más larga en ella contenida 
d) filtraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor numérico (i), devuelva el número de palabras cuya longitud es mayor a i.  
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que sólo aparece en mayúscula la primera letra y el resto en  
minúscula.*/
document.write("<h3>Ejercicio 1.a</h3>");
var cadena_original=prompt("1a. Introduce una cadena de caracteres");
var a = new String();
function invierteCadena(cad_arg){
    for(let i=cad_arg.length-1; i>=0; i--)
        a+=(cad_arg[i]);
    return a;
}
document.write("Cadena introducida: "+cadena_original+"<br>");
document.write("cadena invertida: "+invierteCadena(cadena_original)+"<br>");

///////////////////////////////////////////////////////
document.write("<h3>Ejercicio 1.b</h3>");
cadena_original=prompt("1b. Introduce una cadena de palabras");
a='';
function inviertePalabras(cad_arg){
    var arrayPalabras=cadena_original.split(' ');
    for(let i=arrayPalabras.length-1; i>=0; i--)
        a+=arrayPalabras[i]+" ";
    return a;
}
document.write("Cadena de palabras introducida: "+cadena_original+"<br>");
document.write("cadena de palabras invertida: "+inviertePalabras(cadena_original)+"<br>");

///////////////////////////////////////////////////////////
document.write("<h3>Ejercicio 1.c</h3>");

cadena_original=prompt("1c. Introduce una cadena de palabras");
var longitud=0;
var palabra="";
function encuentraPalabraMasLarga(cad_arg){
    var arrayPalabras=cadena_original.split(' ');
    for(let i=0; i<arrayPalabras.length; i++){
        if(arrayPalabras[i].length>longitud){
            longitud=arrayPalabras[i].length;
        }
    }
    return longitud;
}
document.write("Cadena de palabras introducida: "+cadena_original+"<br>");
document.write("La palabra más larga: tiene: "+encuentraPalabraMasLarga(cadena_original)+" caracteres<br>");

/////////////////////////////////////////////////////////
document.write("<h3>Ejercicio 1.d</h3>");
cadena_original=prompt("1d. Introduce una cadena de palabras");
var numero=parseInt(prompt("Introduce un número de caracteres que quieras que superen las palabras"));
function filtraPalabrasMasLargas(cad_arg, num){
    var cont=0;
    var arrayPalabras=cad_arg.split(' ');
    for(let i=0; i<arrayPalabras.length; i++)
        if(arrayPalabras[i].length > num)
            cont++;

    return cont;
}
document.write("Cadena de palabras introducida: "+cadena_original+"<br>");
document.write("Número de palabras con más de "+numero+" caracteres: "+filtraPalabrasMasLargas(cadena_original,numero)+"<br>");

///////////////////////////////////////////////////////////
document.write("<h3>Ejercicio 1.e</h3>");
var cadena_original=prompt("1d. Introduce una cadena de palabras");
function cadenaBienFormada(cad_arg){
    var nuevaCadena=new String(cad_arg.toLowerCase());
    var primeraLetra=new String(nuevaCadena[0]);
    var primera_letra=primeraLetra.toUpperCase();
    return primera_letra.concat(nuevaCadena.slice(1));
}
document.write("Cadena de palabras introducida: "+cadena_original+"<br>");
document.write("Cadena final: "+cadenaBienFormada(cadena_original)+"<br>");
