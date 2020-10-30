/*Realiar una página que cree un objeto de tipo Date y 
muestre en la página la siguiente información (cada una en una línea)
El año actual
El mes actual
El día actual
La hora actual
Los minutos actuales
Los segundos actuales
*/
var fecha = new Date();
document.write("Año: "+fecha.getFullYear()+"<br/>");
document.write("Mes: "+(fecha.getMonth()+1)+"<br/>");//empieza desde enero en 0
document.write("Día: "+fecha.getDate()+"<br/>");//getDay muestra el día de la semana, empezando desde el domingo en 0
document.write("Horas: "+fecha.getHours()+"<br/>");
document.write("Minutos: "+fecha.getMinutes()+"<br/>");
document.write("Segundos: "+fecha.getSeconds()+"<br/>");
