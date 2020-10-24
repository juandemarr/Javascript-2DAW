/*Hacer un programa en Javascript que usando dos bucles anidados for imprima
por pantalla todas las tabals de multiplicar.*/

for(let a=1; a<=10; a++){
    document.write("<b>Tabla del "+a+"</b><br/>");
    for(let b=1; b<=10; b++){
        document.write(a+" x "+b+" = "+a*b+"<br/>");
    }
    document.write("<br/>");
}