
/*5. Usando el objeto Date, sus métodos getHours, getMinutes y GetSeconds y
el método setTimeout() crea un reloj que se actualice cada segundo
*/


function imprime(){
    var fecha=new Date();//tengo que declaralo dentro para que cada vez que llame a la 
    //funcion se cree el objeto fecha actualizado. Si se crea fuera es como una captura a la 
    //fecha y luego siempre mostrará lo mismo
    console.log(fecha.getHours()+' : '+fecha.getMinutes()+' : '+fecha.getSeconds());

    setTimeout(imprime, 1000);
}

setTimeout(imprime,1000);