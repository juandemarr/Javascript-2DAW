/*### 4. The Geometrizer

Create 2 functions that calculate properties of a circle.

Create a function called `calcCircumfrence`:

- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called `calcArea`:

- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/
var radio=parseFloat(prompt("Enter the radius:"));

function calcCircumfrence(radio){
    let circunferencia=2*Math.PI*radio;
    return circunferencia;
}

function calcArea(radio){
    let area=Math.PI*Math.pow(radio,2);
    return area;
}

document.write("<p>The circumference is "+calcCircumfrence(radio)+"</p>");
document.write("<p>The area is "+calcArea(radio)+"</p>");