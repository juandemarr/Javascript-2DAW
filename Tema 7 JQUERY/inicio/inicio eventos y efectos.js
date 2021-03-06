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
    ///////////////Igual que poner
    $(".target").on("change",cambiar);
    function cambiar(){
        alert( "Handler for .change() called." );
    }
    
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
.mouseenter()//equivalente a comienzo del hover
.mouseleave()//equivalnete a salida del hover
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
//Ej
    function flash() {
        $( "div" ).show().fadeOut( "slow" );
    }
    $( "#bind" ).click(function() {
        $( "body" )
        .on( "click", "#theone", flash )//#theone es la id de un boton al que se le cambia el texto
        .find( "#theone" )
            .text( "Can Click!" );
    });
    $( "#unbind" ).click(function() {
        $( "body" )
        .off( "click", "#theone", flash )
        .find( "#theone" )
            .text( "Does nothing..." );
    });
.scroll()
//Ej
    $( window ).scroll(function() {
        $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
    });


//////////////////////////////////////
//EFECTOS
.animate(({propiedades css},"duracion","efecto (swing,linear)",function(){cuando se completa}))//Animara las propiedades numericas de  css desde el valor que tenian hacia el valor que se le indique, 
//en el tiempo dicho, u otras como scrollTop y scrollLeft. 
Todas esas propiedades dentro entre corchetes
/*In addition to numeric values, each property can take the strings 'show', 'hide', and 'toggle'.*/ 
Ej: height: "toggle"
//Tambi8en se le puede especificar un "efecto" a cada propiedad
height: [ "toggle", "swing" ],
//obligatorio solo el principio y la duracion
//Tambien se puede usar += ó -=
//The default duration is 400 milliseconds. 
//The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds
"fast" "slow"
//Para las propiedades top etc hace falta un position

//Ej
$( "#right" ).click(function() {
    $( ".block" ).animate({ left: "+=50px" }, "slow" );
  });

//EJ
  $("div").animate({
    top:vertical
},4000);

.stop()//Para la animacion que tiviera el selector
/* clearQueue (default: false)
    A Boolean indicating whether to remove queued animation as well. Defaults to false.
jumpToEnd (default: false)
    A Boolean indicating whether to complete the current animation immediately. Defaults to false.*/

    .stop(true,true)//Termina la animacion dejandola en su estado final
    .stop (true,false)//Termina la animacion dejandola donde se quedo
    .stop(false,false)//Termina la primera animacion y donde se queda comienza la segunda animacion
    .stop(false,true)//Termina la primera animacion y donde se supone que deberia acabar comienza la segunda
.toggle() //Muestra u oculta un elemento
.slideUp()
//Ej
$( document.body ).click(function() {
    if ( $( "div" ).first().is( ":hidden" ) ) {
      $( "div" ).show( "slow" );
    } else {
      $( "div" ).slideUp();
    }
  });
//Tambien se le puede indicar duracion
$( "#book" ).slideUp( "slow", function() {
    // Animation complete.
});

.slideToggle() //Me parecen igual
.slideDown()//Hacia abajo
.show()
.hide()
.finish()//termina toda la cola de animaciones. Similar a stop(true,true)
.fadeIn()//muestra los elementos ocultos con displat:none
    .fadeIn("slow")
.fadeOut()
.clearQueue()//Remove from the queue all items that have not yet been run.

