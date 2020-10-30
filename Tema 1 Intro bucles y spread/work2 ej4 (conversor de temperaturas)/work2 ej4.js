/*### 4. The Temperature Converter

It's hot out! Let's make a converter, and again you'll have to search the 
internet how to do it.

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."*/

var celsius=parseInt(prompt("Introduce grados celsius"));
var celsiusTOfaren=(celsius*9/5)+32;
var farenheit=parseInt(prompt("Introduce grados fahrenheit"));
var farenTOcelsius=(farenheit-32)*5/9;

document.write("<h1>CONVERSOR DE TEMPERATURAS</h1>");
document.write("<p>"+celsius+"ºC"+" is "+celsiusTOfaren+"ºF<br/></p>");
document.write("<p>"+farenheit+"ºF"+" is "+farenTOcelsius+"ºC</p>");
