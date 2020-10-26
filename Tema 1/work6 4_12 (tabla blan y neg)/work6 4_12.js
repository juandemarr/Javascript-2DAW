/*Modifica el ejercicio anterior para que las columnas impares tengan un
fondo negro y las pares fondo blanco*/
var columnas=parseInt(prompt("Introduce el número de columnas"));
var pAncho=parseInt(prompt("Introduce la anchura de la celda en píxeles"));
var pAlto=parseInt(prompt("Introduce la altura de la celda en píxeles"));

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width=\"200\">");
document.write("<tr height=\""+pAlto+"\">");
for(let i=1 ; i<=columnas ; i++){
    if(i%2==0)
        document.write("<td width=\""+pAncho+"\" bgcolor=\"white\">&nbsp;</td>");
    else
        document.write("<td width=\""+pAncho+"\" bgcolor=\"black\">&nbsp;</td>");
}
document.write("</tr>");
document.write("</table>");
