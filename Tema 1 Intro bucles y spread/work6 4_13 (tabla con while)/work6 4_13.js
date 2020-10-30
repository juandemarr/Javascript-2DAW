/*Adapta el ejercicio 4.11 utilizando un bucle while en vez de un bucle for.*/
var columnas=parseInt(prompt("Introduce el número de columnas"));
var pAncho=parseInt(prompt("Introduce la anchura de la celda en píxeles"));
var pAlto=parseInt(prompt("Introduce la altura de la celda en píxeles"));

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width=\"200\">");
document.write("<tr bgcolor=\"white\" height=\""+pAlto+"\">");
var i=1;
while(i<=columnas){
    document.write("<td width=\""+pAncho+"\">&nbsp;</td>");
    i++;
}
document.write("</tr>");
document.write("</table>");
