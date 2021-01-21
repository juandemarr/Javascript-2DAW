/*Crea un documento con dos botones, start y stop. Mediante el primero se debe producir la
siguiente animación. Debe aparecer un elemento div cuadrado de 40 x 40, desplazarse a la
izquierda 200 px, cambiar de color a azul y ocultarse desplazándose hacia arriba.*/
window.onload=()=>{
    /* $("button:eq(0)").click(function(){
        $("div").fadeIn("slow");
        $("div").animate({left:"-=200"},1000);
        $("div").css({"background-color":"blue"});
        $("div").slideUp();
    }) */
    $("button:eq(0)").click(function(){
        $("div").fadeIn("slow").animate({left:"-=200"},1000).css({"background-color":"blue"}).slideUp();
    });
    $("button:eq(1)").click(function(){
        $("div").stop(true);
    })
}    


