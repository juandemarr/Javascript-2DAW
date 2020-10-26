/*Crea un script que pida al usuario dos números y una operación
(que puede ser el carácter +, -, * ó /). El script debe devolver el resultado de la operación seleccionada 
por el usuario*/
var numero1=parseFloat(prompt("Introduce el primer número"));
var numero2=parseFloat(prompt("Introduce el segundo número"));
var operando=prompt("Introduce un operador (+,-, * ó /)");
var total;

switch(operando){
    case '+':
        total=numero1+numero2;
        document.write(numero1+" + "+numero2+" = "+total);
        break;
    case '-':
        total=numero1-numero2;
        document.write(numero1+" - "+numero2+" = "+total);
        break;
    case '*':
        total=numero1*numero2;
        document.write(numero1+" * "+numero2+" = "+total);
        break;
    case '/':
        while(numero2==0)
            numero2=parseFloat(prompt("Introduce un divisor que no sea 0"));
        total=numero1/numero2;
        document.write(numero1+" / "+numero2+" = "+total);
        break;
}
