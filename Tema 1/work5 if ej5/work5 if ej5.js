/*Crea un script que pregunte al usuario por su nombre, y conteste "Bienvenido" 
o "Bienvenida" según si el nombre introducido es de hombre o de mujer (nota:
realizalo sólo para los nombres: Pablo, Ana, Eduardo y Clara)*/
var nombre=[prompt("Introduce tu nombre")];

if(nombre=='Pablo' || nombre=='Eduardo' || nombre=='eduardo' || nombre=='pablo')
    document.write("Bienvenido");
else
    if(nombre=='Ana' || nombre=='Clara' || nombre=='ana' || nombre=='clara')
        document.write("Bienvenida");
