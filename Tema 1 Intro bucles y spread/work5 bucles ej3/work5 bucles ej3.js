/*Crea un script que pregunte constantemente números al usuario hasta que el usuario introduzca
el número 0*/

var numero=parseInt(prompt("Introduce un número"));
while(numero!=0 && numero!=''){
    numero=parseInt(prompt("Introduce un número"));
}