//.fadeOut(milisegundos) y .fadeIn(milisegundos) son funciones

//EVENTOS
//Dentro del evento se define una function anonima
//Si el selector se refiere a una coleccion de elementos, para coger el elemento que produce el evento
// con $(this)
.change() //Cuando el valor cambia. Limitado a input, textarea y select
    //Ej
    $( ".target" ).change(function() {
        alert( "Handler for .change() called." );
    });
    //.change() activa el evento manualmente
    $( "#other" ).click(function() {
        $( ".target" ).change();
    });

.click()
//Ej
$( "p" ).click(function() {
    $( this ).slideUp();//slideUp() mueve el parrafo hacia arriba ocultandolo
  });

.dblclick()
//Ej
var divdbl = $( "div" ).first();
divdbl.dblclick(function() {
  divdbl.toggleClass( "dbl" );//.toggleClass añade o elimina una clase
});

event.pageX() | event.pageY
//Ej:
$( document ).on( "mousemove", function( event ) { //con .on es otra forma de definir eventos
    $( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
  });

.focus()
//Ej
$( "input" ).focus(function() {
    $( this ).next( "span" ).css( "display", "inline" ).fadeOut( 1000 );
});

.focusIn()
.focusOut()
.hover()
//Un elemento puede tener mas de un evento, no se machacan, sino añaden
//Ej
    <script>
    $( "li" ).hover(
    function() {//this => elemento que provoca el evento de la coleccion del selector
        $( this ).append( $( "<span> ***</span>" ) );//Funcion cuando entra en el hover
    }, function() {//coma
        $( this ).find( "span" ).last().remove();//funcion cuando sale del hover
    }
    );
    
    $( "li.fade" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
    });
    </script>

.keydown()
.keypress()
.keyup()
.mousemove()
.mouseenter()
.mousedown() //al clicar
.mouseup() //al dejar de clicar
//Ej
    $( "p" )
    .mouseup(function() {
        $( this ).append( "<span style='color:#f00;'>Mouse up.</span>" );
    })
    .mousedown(function() {
        $( this ).append( "<span style='color:#00f;'>Mouse down.</span>" );
    });

.off() //Quita el evento. Se pone nombre del evento, elemento, y si en el .on() se nombro algo mas, tbn aqui
.scroll()
//Ej
    $( window ).scroll(function() {
        $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
    });

