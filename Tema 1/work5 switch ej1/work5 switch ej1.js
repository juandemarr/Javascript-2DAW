/*Crea un script que pregunte al usuario por el nombre de un mes, y muestre el número
de días que tiene el mes*/
var mes=prompt("Introduce el mes");

switch(mes){
    case 'Enero':
        document.write("El mes tiene 31 días");
        break;
    case 'Febrero':
        document.write("El mes tiene 28 días");
        break;
    case 'Marzo':
        document.write("El mes tiene 31 días");
        break;
    case 'Abril':
        document.write("El mes tiene 30 días");
        break;
    case 'Mayo':
        document.write("El mes tiene 31 días");
        break;
    case 'Junio':
        document.write("El mes tiene 30 días");
        break;
    case 'Julio':
        document.write("El mes tiene 31 días");
        break;
    case 'Agosto':
        document.write("El mes tiene 31 días");
        break;
    case 'Septiembre':
        document.write("El mes tiene 30 días");
        break;
    case 'Octubre':
        document.write("El mes tiene 31 días");
        break;
    case 'Noviembre':
        document.write("El mes tiene 30 días");
        break;
    case 'Diciembre':
        document.write("El mes tiene 31 días");
        break;
}
/*Otra forma sería poniendo switch(true) y en cada case evaluar la variable 
mes=="Enero" etc*/