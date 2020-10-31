/*Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada.*/
function mover(e){
    if(e.shiftKey)
        e.target.style.backgroundColor="blue"; //target hace referencia al que origina 
        //el evento, en este caso el td
    else if(e.ctrlKey)
        e.target.style.backgroundColor="red";
}


function main(){
    tabla="<table>"; //si se pone var también funciona, solo que así es una variable global

    for(let i=0; i<100; i++){
        tabla+="<tr>";
        for(let j=0; j<100; j++)
            tabla+="<td onmousemove='mover(event)'></td>";//se llama como en html, al serlo

        tabla+="</tr>";
    }

    tabla+="</table>";

    document.getElementById('tabla').innerHTML=tabla;
}