/*Haciendo uso de un array unidimensional, escribir un script para simular el 
lanzamiento de dos dados. El script debe simular el lanzamiento (aleatorio) de ambos
dados. La suma de los dos valores debe calcularse a continuación (la suma variará 
pues de 2 a 12, siendo éstos los valores menos frecuentes así como 7 el más frecuente).
Haz una simulación con 36.000 lanzamientos y muestra el número de veces que aparece 
cada una de las combinaciones.*/
function dosDados(){
    var array1=[];
    var array2=[];
    var cont2=cont3=cont4=cont5=cont6=cont7=cont8=cont9=cont10=cont11=cont12=0;

    for(i=1; i<36000; i++){
        array1.push(Math.round(Math.random()*6)+1);
        array2.push(Math.round(Math.random()*6)+1);
        
        var suma;
        suma=array1[i-1]+array2[i-1];
        switch(suma){
            case 2: cont2++;
                break;
            case 3: cont3++;
                break;
            case 4: cont4++;
                break;
            case 5: cont5++;
                break;
            case 6: cont6++;
                break;
            case 7: cont7++;
                break;
            case 8: cont8++;
                break;
            case 9: cont9++;
                break;
            case 10: cont10++;
                break;
            case 11: cont11++;
                break;
            case 12: cont12++;
                break;
        }
    }
    var array=[cont2,cont3,cont4,cont5,cont6,cont7,cont8,cont9,cont10,cont11,cont12];
    return array;
}

dosDados().forEach( (valor,posicion) => document.write("Valor "+(posicion+2)+
" ha salido "+valor+" veces<br>"));


/*Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre
las combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar
arrays bidimensionales).*/




