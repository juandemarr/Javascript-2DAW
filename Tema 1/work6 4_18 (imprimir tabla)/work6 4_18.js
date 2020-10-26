/*Hacer un programa que pida por teclado cuatro valores: el número de columnas y filas
de una tabla y, la altura y anchura (en pixels) de sus celdas. Una vez
tecleados estos valores, el programa pintará en la página web una tabla HTML del nº de filas
por el nº de columnas tecleadas.*/

var columnas=parseInt(prompt("Introduce el número de columnas"));
var filas=parseInt(prompt("Introduce el número de filas"));
var pAlto=parseInt(prompt("Introduce la altura de las celdas en píxeles"));
var pAncho=parseInt(prompt("Introduce la anchura de las celdas en píxeles"));

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\" width=\"200\">");
for(let j=1; j<=filas; j++){
    document.write("<tr bgcolor=\"white\" height=\""+pAlto+"\">");
    for(let i=1; i<=columnas; i++){
        document.write("<td width=\""+pAncho+"\">&nbsp;</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
