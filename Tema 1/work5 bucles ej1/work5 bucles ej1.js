/*Crea un script que muestre en la ágina web todos los números desde el uno
hasta el 10, cada uno de ellos separado por una línea (<hr>)*/
document.write("<h2>BUCLE FOR</h2>");
for (let i=1 ; i<=10 ; i++){
    document.write(i+"<hr/>");
}

document.write("<h2>BUCLE WHILE</h2>");
var j=1;
while(j<=10){
    document.write(j+"<hr/>");
    j++;
}

document.write("<h2>BUCLE DO WHILE</h2>");
var z=1;
do{
    document.write(z+"<hr/>");
    z++;
}while(z<=10);
