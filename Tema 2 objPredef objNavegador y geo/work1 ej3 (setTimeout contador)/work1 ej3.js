/*Utilizando setTimeout() creo un contador hacia atrás de 60 segundos.*/
/*
for(let i=59 ; i>=1 ; i--){
        setTimeout(function(){console.log(i);},1000);
        
    }//con bucle for no sirve ya que los muestra a la vez al seguir ejecutandose
*/

var contador=60;
function imprime(){
    console.log(contador);
    contador--;

    if(contador>0)
        setTimeout(imprime, 1000);
}

setTimeout(imprime,1000); //la funcion en setTimeout tiene que ser sin parentesis, 
//porque llamaria a la funcion sin esperar, al ser un lenguaje interpretado



//Otra forma
/*
setTimeout(function (){
    console.log("Hola");
},4000);//funcion anonima, no tiene nombre, se crea directamente 
//donde se usa
*/


//con funcion arrow
//setTimeout( () => console.log("Entra en funcion"),4000);