/*Crea una página web en la que se muestre el resultado de cada uno de 
los siguientes apartados:
a. Crear variable "fechaHoy" con fecha de hoy
b. Crear variable "fecha85" que sume 85 días a la variable "fechaHoy"
c. Crear variable "fecha187" que reste 187 días a la variable "fechaHoy"
d. Sumar 2 años a la variable "fecha85"
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y
observa lo que obtienes*/
//Para operar con fechas siempre creamos otro objeto date al que asignarle la nueva fecha

var fechaHoy=new Date();
var fecha85=new Date();
var fecha187=new Date();
var fechaSuma=new Date();
var fechaResta=new Date();
var fechaResto=new Date();

document.write("a. Crear variable fechaHoy con fecha de hoy => "+fechaHoy.toLocaleString()+"<br>");

fecha85.setDate(fechaHoy.getDate()+85);//necesito hacerlo sobre un objeto date entero, para que pueda 
//hacer la equivalencia de los dias sobrantes a meses y reestructurar la fecha
document.write("b. Crear variable fecha85 que sume 85 días a la variable fechaHoy => "+
fecha85.toLocaleDateString() +"<br>"); //muestra solo la fecha, sin la hora. En formato del país actual

fecha187.setDate(fechaHoy.getDate()-187);
document.write("c. Crear variable fecha187 que reste 187 días a la variable fechaHoy => "+
fecha187.toLocaleDateString() +"<br>");

fechaSuma.setYear(fecha85.getFullYear()+2);
document.write("d. Sumar 2 años a la variable fecha85 => "+fechaSuma.toLocaleDateString()+"<br>");

fechaResta.setDate(fecha187.getHours()-24);
document.write("e. Restar 24 horas a la variable fecha187 => "+fechaResta.toLocaleString()+"<br>");

fechaResto.setDate(fecha85.getDate()-fecha187.getDate());
document.write("f. Crear variable fechaResto que sea la resta de fecha85 - fecha187 => "+
fechaResto.toLocaleString());

/*Date.now() milisegundos actuales desde 1970
new Date(Date.now()) no hace nada el now*/