/*Crea una página en la que se muestre:
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

/*Crea una web para resolver ecuaciones de segundo grado. Deberá pedir por
tanto los coeficientes y mostrar las soluciones posibles.*/
document.write("<h3>Ejercicio 5</h3>");
var coef1=parseInt(prompt("Introduce el primer coeficiente"));
var coef2=parseInt(prompt("Introduce el segundo coeficiente"));
var coef3=parseInt(prompt("Introduce el tercer coeficiente"));

var resu1=(-coef2 + Math.sqrt(Math.pow(coef2,2)-4*coef1*coef3))/2*coef1;
var resu2=(-coef2 - Math.sqrt(Math.pow(coef2,2)-4*coef1*coef3))/2*coef1;
document.write("Solucion 1: "+resu1+"<br>");
document.write("Solucion 2: "+resu2+"<br>");

/*Crea una web que genere una tabla con dos columnas. En la primera un
número ascendente y en la otra el valor de su seno.
*/
document.write("<h3>Ejercicio 7</h3>");
document.write("<table>");
for(let tr=1; tr<=3; tr++){
    document.write("<tr>");
    for(let td=1; td<=2; td++){
        if(td==1)
            document.write("<td></td>");
        else
            
    }
    document.write("</tr>");
}
document.write("</table>");