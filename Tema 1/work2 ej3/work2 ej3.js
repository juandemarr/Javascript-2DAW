/*### 3. The Geometrizer

Calculate properties of a circle, searching the internet for definitions
 if not remember.

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference 
is NN".
- Calculate the area based on the radius, and output "The area is NN".*/
var radio=parseInt(prompt("Introduzca el radio"));
var circunferencia=2*Math.PI*radio;
var area=Math.PI*Math.pow(radio,2);
document.write("La circunferencia es:"+circunferencia.toFixed(3)+"<br/>");//variable.toFixed(2) redondea a 
//los decimales indicados

//document.write("La circunferencia es: "+2*Math.PI*radio+"<br/>");
//document.write("El area es: "+Math.PI*Math.pow(radio,2));
document.write("El area es: "+area.toFixed(2));