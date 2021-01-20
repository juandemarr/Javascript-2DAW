    //JQUERY es una libreria que se descarga, mejor el development, aunque para ponerlo en 
    //produccion sin warning entonces el production

    /*En jquery las var que guardamos con los elementos HTML no son objetos DOM como en javascript, 
    sino variables*/
    //$(selector) para hacer referencia a las etiquetas
    //$ sustituye a la funcion jquery(), una forma de nombrarla, pero el $ es una funcion
    //#a => indica id
    //.a => indica clase
    //mismos getDocument que javascript

    //Para añadir una libreria
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/3.11.4/math.js"></script>
    /////////////////////////////////////////////////////////////////////////////////////
    $('p').addClass('special')//coge todas las etiquetas p EN UNA COLECCION y les añade la clase special
    $('img').hide();//esconde todas las imagenes
    ////////////////////////////////////

    //Ej para CREAR ETIQUETA
    var newP = $('<p class="hellothere">Welcome!</p>');//tbn se puede añadir sobre la marcha la clase y estilos
    newP.css({'float': 'left', 'background-color': 'red'});//para añadir css entre llaves
    newP.addClass('special');
    $('div.header').append(newP);//se añade al final
    $('div.header').prepend(newP);//se añade al principio
    ///////////////////////////////////////
    var mylink=$('#hello a')//con espacio para especificar mas de un selector
    var mylink2=$('a#yahoo')//etiqueta con esa id

    //Los métodos sirven tanto para leer como para escribir propiedades
    mylink.html(); //funcion html() devuelve el contenido de la etiqueta
    mylink.html('Yahoo');//Sustituye el contenido por este

    mylink.attr('href');//devuelve su contenido
    mylink.attr('href, http://www.google.es'); //Se lo añade o cambia. Par valor separado por coma

    mylink.css('font-size')//devuelve el valor de la propiedad de css
    mylink.css({'color':'purple'});//nombre propiedad y valor entre '' separados por :
    //////////////////////////////////////////

    var myp=$('<p>')//este crea la etiqueta vacia, tanto la apertura como el cierre.
    ////////////////////////////////////////

    var paragraphs = $('p'); // an array. La coleccion que coge jquery
    var myParagraph = paragraphs[0]; // a regular DOM node
    var $myParagraph = $(paragraphs[0]); // a jQuery Object. $variable se convierte en un objeto jquery

    //Como iterarlo. NI IDEA.
    /*for(var i = 0; i < paragraphs.length; i++) {
        var element = paragraphs[i];
        var paragraph = $(element);
        paragraph.html(paragraph.html() + ' wowee!!!!');//coge lo que hay y lo concatena
    };*/    

    //SELECTORES

    * //Todos
    $( "input[value='Hot Fuzz']" ).next().text( "Hot Fuzz" );
    //.next() va a la siguiente etiqueta
    //.text() le pone ese texto
    $( "input[type=checkbox]" ).on( "click", countChecked );//coge los checkbox y les aplica un evento con .on()
    .click(function(){

    })
    //Dentro de la funcion
        var n = $( "input:checked" ).length;//coge un array de los input checked

    $(":button") //se queda con los input type button y con los button
    $(":checkbox")
    var input = $( "form input:checkbox" )
        .wrap( "<span></span>" )//crea una etiqueta que englobe a la actual, una etiqueta padre
        .parent()//como sigue en la etiqueta actual, se va a la etiqueta padre
        .css({background: "yellow",border: "3px red solid"
    });
    $( "ul.topnav > li" ).css( "border", "3px double red" );//Todos los hijos directos del padre
    $(":disabled")
    $(":empty")
    $(":hidden")//Hecho con dispaly:none
    $( "td:eq( 2 )" )//Dentro del array de los td coge el 2 (al ser array empieza en 0)
    $( "tr:even" )//coge los tr pares. $("tr:odd") los impares
    $( "div span:first-child" )//coge una coleccion de todos los hijos directos
    :first //coge solo el primer hijo
        .css( "text-decoration", "underline" )
        .hover(function() {//define el evento hover(lo que ocurre cuando se pone encima , lo que ocurre cuando sale)
            $( this ).addClass( "sogreen" );
        }, function() {
            $( this ).removeClass( "sogreen" );
    });
    //etiquetas seleccionadas a continuacion del numero indicado
    //greater than() => gt()
    $( "td:gt(4)" ).css( "backgroundColor", "yellow" );//todos los siguientes al 4
    $( "td:gt(-2)" ).css( "color", "red" );//empieza desde el final, se va al 2 y coge el siguiente, el ultimo
    //lt() lesser than. Anteriores al numero indicado
    :last-child()
    :first
    :last //el ultimo elemento
    :nth-child() //no posiciones del array, sino numero de hijo
    //Una vez tenemos el elemento seleccionado, se hace algo con el, como efectos o eventos
    //multiples selectores entre comillas dobles separados por comas
    $( "a" ).click(function() {
        $( "div" ).fadeIn( 3000, function() {//3000 segundos de duracion
          $( "span" ).fadeIn( 100 );
        });
    });
    //Otro ejemplo
    $( document.body ).click(function() {
        $( "div:hidden" ).first().fadeIn( "slow" );//fast o con numero
      });
