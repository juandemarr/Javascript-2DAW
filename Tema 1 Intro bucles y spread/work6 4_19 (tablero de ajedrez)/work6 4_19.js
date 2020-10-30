/*Hacer un programa que pinte un tablero de ajedrez de 8x8 casillas
usando dos for anidados.
El programa pedirá solamente el ancho de la celda que será igual que el alto.*/
var tamano=parseInt(prompt("Introduce el ancho de la celda en píxeles"));

document.write("<section id=\"main\">");

document.write("<table>");
for(let fila=1; fila<=8; fila++){
    document.write("<tr height=\""+tamano+"\">");
    for(let celda=1; celda<=8; celda++){
        if((celda%2!=0 && fila%2!=0)||(celda%2==0 && fila%2==0))
            document.write("<td bgcolor=\"black\" width=\""+tamano+"\"></td>");
        else
            document.write("<td bgcolor=\"white\" width=\""+tamano+"\"></td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("</section>");