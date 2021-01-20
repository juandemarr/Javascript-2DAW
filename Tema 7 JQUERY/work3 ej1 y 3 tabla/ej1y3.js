/*Ej1 Crea una tabla de 8 filas, a continuación pon el fondo rojo a todas aquellas que estén por
encima de la tercera (2) y pon el fondo azul a todas aquellas que estén por debajo de la tercera
(2)*/
/*Ej3 Selecciona de una tabla todas las casillas vacías y ponlas un color de fondo amarillo.
*/
window.onload=()=>{
    //Ej1
    $('tr:gt(2)').css({'background-color':'red'});
    $('tr:lt(2)').css({'background-color':'blue'});

    //Ej3
    $('td:eq(2)').text("");
    $('td:empty').css({'background-color':'yellow'});
}