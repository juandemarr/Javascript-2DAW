/*### 3. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
- Write a function named 
  ```
  calculateSupply
  ```
  that:
  - takes 2 arguments: age, amount per day.
  - calculates the amount consumed for rest of the life (based on a constant max age).
  - outputs the result to the screen like so: "You will need NN to last you until the 
  //ripe old age of X"

- Call that function three times, passing in different values each time.

- **Bonus**: Accept floating point values for amount per day, and round the result to a round number.
*/
const maxAge=100;

function calculateSupply(){
    let age=parseInt(prompt("Enter your age:"));
    let amount=parseFloat(prompt("Enter the maount per day of calories:"));
    let total=(maxAge-age)*365*amount;
    document.write("You will need "+Math.round(total)+" to last you until the ripe old "+
    " age of "+maxAge+"<br/>");//Math.round redondea a numero entero
    //document.write("You will need "+total.toFixed(2)+" to last you until the ripe old "+
    //" age of "+maxAge+"<br/>");//toFixed(numeroDecimales) redondea a esos decimales
}//al poner document.write dentro de la funcion, cuando se llame tendria que pedir los 
//dos datos, mostrar el resultado y luego pedir los tros dos datos. 
//En firefox sale, en chrome y opera no

calculateSupply();
calculateSupply();
calculateSupply();

