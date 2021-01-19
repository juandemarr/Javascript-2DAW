/* Crea una web simulando una serie de noticias (3 divs con el texto de la noticia y sobre cada uno
    su título correspondiente). Mediante JQuery
a) Cambia el tamaño de fuente de las noticias (3 tamaños).
b) Al pulsar sobre cada título se debe mostrar u ocultar ésta.
c) Al colocar el ratón sobre el texto de la noticia debe cambiar el color de fondo de ésta.
d) Completa el apartado c) haciendo que al salir el ratón se vuelva a su color original el
fondo.*/

window.onload=()=>{
    
    //Apartado a
    $('h1:first').css({'font-size' : '1rem'});
    $('h1:eq(1)').css({'font-size' : '2rem'});
    $('h1:eq(2)').css({'font-size' : '3rem'});
    
    //Apartado b
    var myh1=$('h1');
    myh1.click(function(){
        $(this).hide()});
    
    //Apartado c
    var colorP=$('p').css("background-color");
    $('p').hover(function() {
        $(this).css({"background-color":"orangered"});
    }, function(){
        $(this).css({"background-color":colorP});
    })
}  