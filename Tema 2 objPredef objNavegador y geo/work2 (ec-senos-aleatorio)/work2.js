/*1. Crea una página en la que se muestre:
• Un número aleatorio entre 0 y 1.
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un n aleatorio entre esos dos º
valores
*/
document.write("<h3>Ejercicio 1</h3>");
document.write(Math.round(Math.random())+'<br>');

document.write(Math.round(Math.random()*(200-100)+100)+'<br>');

var valor1=parseInt(prompt("Introduce el mínimo"));
var valor2=parseInt(prompt("Introduce el máximo"));
document.write(Math.round(Math.random()*(valor2-valor1)+valor1)+'<br>');

/*5. Crea una web para resolver ecuaciones de segundo grado. Deberá pedir por
tanto los coeficientes y mostrar las soluciones posibles.*/
document.write("<h3>Ejercicio 5</h3>");
var coef1=parseInt(prompt("Introduce el primer coeficiente"));
var coef2=parseInt(prompt("Introduce el segundo coeficiente"));
var coef3=parseInt(prompt("Introduce el tercer coeficiente"));

var resu1=(-coef2 + Math.sqrt(Math.pow(coef2,2)-4*coef1*coef3))/2*coef1;
var resu2=(-coef2 - Math.sqrt(Math.pow(coef2,2)-4*coef1*coef3))/2*coef1;
document.write("Solucion 1: "+resu1+"<br>");
document.write("Solucion 2: "+resu2+"<br>");

/*7. Crea una web que genere una tabla con dos columnas. En la primera un
número ascendente y en la otra el valor de su seno.
*/
document.write("<h3>Ejercicio 7</h3>");
document.write("<table>");
for(let tr=1; tr<5; tr++){
    document.write("<tr>");
    for(let td=1; td<=2; td++){
        if(tr==1 && td==1)
            document.write("<td>0</td>");
        else if(tr==2 && td==1)
            document.write("<td>45</td>");
        else if(tr==3 && td==1)
            document.write("<td>90</td>");
        else if(tr==4 && td==1)
            document.write("<td>180</td>");
        else if(tr==1 && td==2)
            document.write("<td>"+Math.sin(0*(Math.PI/180))+"</td>");//Hay que convertir los angulos a radianes
        else if(tr==2 && td==2)
            document.write("<td>"+Math.sin(45*(Math.PI/180))+"</td>");
        else if(tr==3 && td==2)
            document.write("<td>"+Math.sin(90*(Math.PI/180))+"</td>");
        else if(tr==4 && td==2)
            document.write("<td>"+Math.sin(180*(Math.PI/180))+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");

/*8. Crea una web en la que cada vez que se accede se muestre una imagen
(de modo aleatorio) de entre 3 posibles.*/
document.write("<h3>Ejercicio 8</h3>");
var num=Math.floor((Math.random()*3)+1);
switch (num){
case 1:
    document.write("<div class=\"imagen1\">");
    break;
case 2:
    document.write("<div class=\"imagen2\">");
    break;
case 3:
    document.write("<div class=\"imagen3\">");
    break;
}
document.write("</div>");