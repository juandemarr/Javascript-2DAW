/*Escribir un programa que muestre la frase "Cabecera h"
seguido del número. Las frases deben estar formateadas con las etiquetas adecuadas.*/
document.write("<h1> PRÁCTICA DE BUCLE FOR</h1>");
for(let i=1 ; i<=6 ; i++){
    document.write("<h"+i+">Cabecera h"+i+"</h"+i+">");
}