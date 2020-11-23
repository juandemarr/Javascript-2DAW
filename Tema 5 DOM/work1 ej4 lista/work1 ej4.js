/*
Crea una web con una lista de elementos y un botón que cada vez que pulsemos introduzca
una entrada nueva en la lista
*/
window.onload=main;

function main(){
    document.getElementById("botonIntroducir").addEventListener("click",introducirElemento);
}

function introducirElemento(){
    let elemento=prompt("¿Qué deporte deseas introducir?");
    let li=document.createElement("li");
    let contenidoLi=document.createTextNode(elemento);
    li.appendChild(contenidoLi);
    document.querySelector("ul").appendChild(li);
}