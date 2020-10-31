/*5. Añade las siguientes funcionalidades al ejercicio anterior:
◦ Borrado de lineas con el ratón (mediante la pulsación del botón que tú
decidas)
◦ Borrar por completo el canvas (con un botón)*/
function mover(e){
    if(e.shiftKey)
        e.target.style.backgroundColor="blue";
    else if(e.ctrlKey)
        e.target.style.backgroundColor="red";
    else
        e.target.style.backgroundColor="";
}
/*Borrar las celdas haciendo click
function borrarCelda(borrado){
    var boton=borrado.button;
    if(boton==0)//0 izquierdo|1 rueda|2 derecho
        borrado.target.style.backgroundColor="";
}*/

function tablaOut(noTabla){
    tabla="";
    document.getElementById('tabla').innerHTML=tabla;
}

function main(){
    tabla="<table>";

    for(let i=0; i<100; i++){
        tabla+="<tr>";
        for(let j=0; j<100; j++)
            tabla+="<td onmousemove='mover(event)' onclick='borrarCelda(event)'></td>";

        tabla+="</tr>";
    }

    tabla+="</table>";

    document.getElementById('tabla').innerHTML=tabla;
}