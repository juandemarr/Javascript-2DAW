/*
Crea una página web con al menos tres párrafos y dentro de ellos
un número indeterminado de enlaces (al menos uno debe enlazar a google). Haciendo tan sólo
uso del DOM muestra los siguientes datos:
* Número de enlaces de la página
* Dirección a la que enlaza el penúltimo enlace
* Número de enlaces que enlazan a google
* Número de enlaces del tercer párrafo.
*/
window.onload=main;
function main(){
    console.log("Número de enlaces de la página");
    console.log(document.getElementsByTagName("a").length);
    
    /////////////////////////
    console.log("Dirección a la que enlaza el penúltimo enlace");
    console.log(document.getElementsByTagName("a")[document.getElementsByTagName("a").length-1].getAttribute("href"));
    
    ////////////////////////
    console.log("Número de enlaces que enlazan a google");
    var cont=0;
    for(let i=0; i<document.getElementsByTagName("a").length; i++){
        if(document.getElementsByTagName("a")[i].getAttribute("href")=="www.google.es")
            cont++;
    }
    console.log("Hay "+cont+" enlaces a google");
    
    ////////////////////////
    console.log("Número de enlaces del tercer párrafo.");
    let p=document.getElementsByTagName("p")[2];
    console.log(p.getElementsByTagName("a").length);
}