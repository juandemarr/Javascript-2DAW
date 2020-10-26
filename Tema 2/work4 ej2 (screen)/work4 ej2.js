/*Realiza lo mismo para la información de la pantalla utilizada por el cliente.*/
document.write("<table>");
document.write("<tr><td>availHeight: "+screen.availHeight+"</td></tr>");
document.write("<tr><td>availWidth: "+screen.availWidth+"</td></tr>");
document.write("<tr><td>colorDepth: "+screen.colorDepth+"</td></tr>");
document.write("<tr><td>height: "+screen.height+"</td></tr>");
document.write("<tr><td>Ángulo de orientation: "+screen.orientation.angle+"</td></tr>");
document.write("<tr><td>Tipo de orientation: "+screen.orientation.type+"</td></tr>");
document.write("<tr><td>pixelDepth "+screen.pixelDepth+"</td></tr>");
document.write("<tr><td>width: "+screen.width+"</td></tr>");
document.write("</table>");