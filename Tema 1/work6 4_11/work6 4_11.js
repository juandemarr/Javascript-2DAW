/*Hacer un programa que pida por teclado tres valores: el número de columnas de una tabla y, la altura
y anchura (en pixels) de sus celdas. Una vez tecleados estos valores, el programa
pintará en la página web una tabla HTML de una fila por el nº de columans tecleadas*/
var columnas=parseInt(prompt("Introduce el número de columnas"));
var pAncho=parseInt(prompt("Introduce la anchura de la celda en píxeles"));
var pAlto=parseInt(prompt("Introduce la altura de la celda en píxeles"));

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width=\"200\">");
document.write("<tr bgcolor=\"white\" height=\""+pAlto+"\">");
for(let i=1 ; i<=columnas ; i++){
    document.write("<td width=\""+pAncho+"\">&nbsp;</td>");
}
document.write("</tr>");
document.write("</table>");
