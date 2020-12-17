/*EJ 1 
Write a function that can take in any number of arguments, and returns the sum of 
all of the arguments.*/
/*function suma(...args){
    let a=0;
    for(let i=0 ; i<args.length ; i++){
        a+=args[i];
    }
    return a;
}*/
//console.log(suma(2,4,1,3));

//OPERADOR RES

//con for of
function suma(...args){
    let a = 0;
    for(i of args)
        a+=i;
    return a;
}
console.log(suma(2,3,5));//si no se le pasan parámetros, no da error, es 0

/*EJ 2
 *Write a function called addOnlyNums that can take in any number of arguments 
 *(including numbers or strings), and returns the sum of only the numbers.
 */

//podemos comprobar si es numero con la funcion isNaN() que devolvera true si no lo es
//number.isInteger() devuelve true si es entero
function addOnlyNums(...args){
    let suma=0;
    for(a of args){
        if(!isNaN(a))
            suma+=a;
    }
    return suma;
}
console.log(addOnlyNums(2,'hola',3,"que tal"));

/*EJ 3
 * Write a function called `countTheArgs` 
 * that can take any number of arguments, and returns the number of arguments that are passed in.
 */
function countTheArgs(...args){
    cont=0;
    for(a of args)
        cont++;
    return cont;
}
console.log(countTheArgs(2,34,4,5));

/*EJ 4
 * Write a function called combineTwoArrays that takes in two arrays as arguments, 
 * and returns a single array that combines both (using the spread operator).
 */
var array1=[1,2,3];
var array2=[4,5,6];
function combineTwoArrays(...args){
    let array=[...args];
    return array;
}
console.log(combineTwoArrays(...array1, ...array2));

/*EJ 5
 Write a function called sumEveryOther that takes in any amount of arguments, 
 and returns the sum of every other argument. 
 */
var otroArray=[5,6,3,4,1];
function sumEveryOther(...arr){
    let suma=0;
    for(let i=0 ; i<arr.length ; i++)
        if(i%2==0)
            suma+=arr[i];
    return suma;
}
console.log(sumEveryOther(...otroArray));

/*EJ 6
 * Write a function called onlyUniques that can take in any number of arguments, 
 * and returns an array of only the unique arguments.
 */
function onlyUniques(...args){
    let a=args[0];
    let b=[];
    for(let i=1; i<args.length; i++)
        if(a!=args[i])
            b.push(args[i]);
    return b;
} 
console.log(onlyUniques('cat','dog','cat','bird'));

/*EJ 7
Write a function called combineAllArrays that takes in any number 
of arrays as arguments and combines all of them into one array.
*/
//DUDA___________________________________________________
let arrays=[1,2];
let arg=['cat','dog'];
console.log("EJ 7");
function combineAllArrays(...args){
    b=[];
    for (array of args)
        b.push(...array);//desglosa el array en cada uno de sus elementos

    return b;
}

console.log(combineAllArrays(arrays,arg,arg,arg));

/*EJ 8
Write a function called squareAndSum that takes in any number of arguments,
squares them, then sums all of the squares.
*/
function squareAndSum(...args){
    let square,suma=0;
    for(i of args){
        square=Math.pow(i,2);
        suma+=square;
    }
    return suma;
}

console.log(squareAndSum(2,3));

