/*Crea un script que pregunte la edad, y determine si debes estar en el jardín de infancia (menores 
de 5 años), en primaria (entre 6 y 11), en la ESO (entre 12 y 16), en Bachillerato o Ciclos (entre 17 y 21)
o en la Universidad (más de 21).*/

var edad=prompt("Cuántos años tienes")

if(edad>3 && edad<=5)
    document.write("Al jardín de infancia");
else if(edad>=6 && edad<=11)
    document.write("A primaria");
else if(edad>=12 && edad<=16)
    document.write("A la ESO");
else if(edad>=17 && edad<=21)
    document.write("Al Bachiller o Ciclos");
else if(edad>21)
    document.write("A la Universidad");