$(function(){
  
    $(window).scroll(function(){
        if($(window).scrollTop()+$(window).height() >= $(document).height()-100)
        //el documento es la pagina con todo su contenido, scrollTop es la posicion inicial del scroll, al cual se suma la parte visible de la ventana (este scroll quedaria arriba sin verse)
        //Window es la parte visible
            console.log("Salta scroll infinito");
           
    })
    
    $("button").click(function(){
        $("html").animate({scrollTop:0},1000);
    })
  
  
  
  
});