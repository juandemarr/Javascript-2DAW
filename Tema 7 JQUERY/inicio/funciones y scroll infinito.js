//READY
$(function(){ //equivalente a window.onload
    //aqui dentro toda la "hermosura"
});

//get() funcion que obtiene el resultado, ya sea string o nodo del DOM y al que poder aplicarle otros metodos como map()
//Ej 
$( "li" ).get( 0 ); //Devuelve <li id="foo">

//join(separador) Te une los elementos de un array en un string separados por el separador indicado

//MAP. Mapea todos los elementos del selector y les hace algo, devolviendo un string con el resultado
$( ":checkbox" )
  .map(function() {
    return this.id;
  })
//Otro ej
$( "p" )
  .append( $( "input" ).map(function() {
    return $( this ).val();
  })
  .get()
  .join( ", " ) );

//each() para iterar un bucle
//Ej
$( document.body ).click(function() {
    $( "div" ).each(function( i ) { //i es el indice o iterador
      if ( this.style.color !== "blue" ) {
        this.style.color = "blue";
      } else {
        this.style.color = "";//al quitar el estilo se queda el que tuviera definido en el css
      }
    });
  });
//Otro Ej
$("div").each(function(i,e){
    console.log($(this).html());//no lo hacemos del elemento e porque es un objeto DOM y jquery no trabaja sobre elementos DOM
    
});

//EVENTO SCROLL()
$(window).scroll(function(){//este window al no ser nombre de etiqueta no va entre comillas
    console.log("HELLO THERE");
})

.scrollTop(numero) //lleva la barra de scroll a la posicion indicada 
//Ej. animacion en scrollTop
$("html","body").animate({scrollTop:0},1000);//tiene que ser sobre html y body


