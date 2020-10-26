/*Desarrolla una función que tomando como entrada una cadena de texto nos
devuelva si es o no un palíndromo.*/

cadArg=prompt("Introduzca una palabra");
function palindromo(cadArg){
    var longitud=cadArg.length;
    var mitad=Math.ceil(longitud/2);
    var cont=0;

    for(let i=0; i<mitad; i++)
        if(cadArg[i]==cadArg[longitud-1-i])
            cont++;
    
    if(cont==mitad)
        document.write("La palabra: "+cadArg+" es un palíndromo");
    else
        document.write("La palabra: "+cadArg+" no es un palíndromo");

}
palindromo(cadArg);





