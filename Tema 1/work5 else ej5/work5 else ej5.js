/*Crea un script que recoja la nota de dos exámenes y dos trabajos y determine si la media
es superior a 5 para aprobar la asignatura (75% exámenes y 25% trabajos) y 4.5 en todos ellos.*/
var examen1=parseFloat(prompt("Introduce la nota del primer exámen"));
var examen2=parseFloat(prompt("Introduce la nota del segundo exámen"));
var trabajo1=parseFloat(prompt("Introduce la nota del primer trabajo"));
var trabajo2=parseFloat(prompt("Introduce la nota del segundo trabajo"));

if(examen1>=4.5 && examen2>=4.5 && trabajo1>=4.5 && trabajo2>=4.5){
    let mediaExamenes=(examen1+examen2)/2;
    let mediaTrabajos=(trabajo1+trabajo2)/2;
    let mediaTotal=(mediaExamenes*0.75)+(mediaTrabajos*0.25);
    if(mediaTotal>=5)
        document.write("Has aprobado con "+mediaTotal);
    else
        document.write("Has suspendido con "+mediaTotal);
}else
    document.write("Has suspendido");

