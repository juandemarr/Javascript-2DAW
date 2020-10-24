/*Crear una función llamado paresImpares que cree un array de 100 números aleatorios del
 1 al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que 
 estén juntos los elementos pares y los impares. Después, volver a mostrar el array*/
function paresImpares(){
    var array=[];
    for(i=1; i<=100; i++){
        array.push(Math.round(Math.random()*1000)+1);
    }
    return array;
}

paresImpares().forEach( (valor,indice) => document.write(indice+" : "+valor+"<br>"));

paresImpares().sort( (a,b) => {
        if(a%2==0 && b%2==0 && a<b)
            return -1;
        if(a%2==0 && b%2==0 && a>b)
            return 1;
        if(a%2!=0 && b%2!=0 && a>b)
            return 1;
        if(a%2!=0 && b%2!=0 && a<b)
            return -1;
        if(a%2==0 && b%2!=0)
            return -1;
        if(a%2!=0 && b%2==0)
            return 1;
        return 0;
    })

document.write("AHORA ORDENADO<br>");
paresImpares().forEach( (valor,indice) => document.write(indice+" : "+valor+"<br>"));


////////////////////CORRECION
function lanzamiento(min,max){
    Math.round(Math.random()*(max-min+1)+min);
}
var pares=Array();
var impares=Array();
myArray=Array(100).fill().map(() => lanzamiento(1,1000));

myArray.forEach( valor => {
    if(valor%2==0)
        pares.push(valor);
    else
        impares.push(valor);
})
return pares.concat(impares);
/////////////////////////////////////