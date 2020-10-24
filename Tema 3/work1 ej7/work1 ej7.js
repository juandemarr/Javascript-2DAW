/*Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10.*/
var total=1; 
function factorial(num){
   
    if(num>1){
        
        total*=num;
        factorial(num-1);
    }
    return total;
}
//var fac=prompt("Introduce un valor para calcular su factorial");
document.write("<table>");
for(i=1; i<=10; i++){
    document.write("<tr><td>"+i+"! = "+factorial(i)+"</td></tr>");
    total=1;
}
document.write("</table>");
