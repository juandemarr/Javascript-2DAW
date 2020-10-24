/*Crea un script que pida a un usuario dónde vive; si vive en Madrid y tiene
entre 18 y 30 años, el script debe mostrar en pantalla que el usuario
puede acceder al carnet de empresarios emprendedores*/
var localidad=prompt("Dónde vives");
var edad=parseInt(prompt("Cuántos años tienes"));

if((localidad=='Madrid' || localidad=='madrid') && (edad <=30 && edad >= 18 ))
    document.write("PUEDES ACCEDER AL CARNET DE EMPRESARIOS EMPRENDEDORES");
else
    document.write(":(");