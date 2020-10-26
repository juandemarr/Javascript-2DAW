/*Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el nº
de ocurrencias de cada uno de los valores.*/
function lanzamiento(){
    return (Math.floor(Math.random()*6)+1);
}
var array;
var cont1=cont2=cont3=cont4=cont5=cont6=0;
for(let i=1; i<=6000; i++){
    switch(lanzamiento()){
        case 1:
            cont1++;
            break;
        case 2:
            cont2++;
            break;
        case 3:
            cont3++;
            break;
        case 4:
            cont4++;
            break;
        case 5:
            cont5++;
            break;
        case 6:
            cont6++;
            break;
    }
    array=[cont1,cont2,cont3,cont4,cont5,cont6]
}
array.forEach( (valor,indice) => document.write((indice+1)+" => "+valor+"<br>"));