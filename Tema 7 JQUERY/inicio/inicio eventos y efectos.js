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
//en el tiempo dicho.
//obligatorio solo el principio y la duracion

//Tambien se puede usar += ó -=
//The default duration is 400 milliseconds. 
//The strings 'fast' and 'slow' can be supplied to indicate durations of 200 and 600 milliseconds
//Para las propiedades top etc hace falta un position

//Ej
$( "#right" ).click(function() {
    $( ".block" ).animate({ "left": "+=50px" }, "slow" );
  });


.stop()//Para la animacion que tiviera el selector
    .stop(true,true)//Termina la animacion dejandola en su estado final
    .stop (true,false)//Termina la animacion dejandola donde se quedo
    .stop(false,false)//Termina la primera naimacion y continuya con la siguiente
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
.finish()//termina toda la cola de animaciones
.fadeIn()//muestra los elementos ocultos con displat:none
    .fadeIn("slow")
.fadeOut()


