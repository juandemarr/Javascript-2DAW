/*Crea un documento en el que se produzcan 4 animaciones mediante un botón y mediante un
segundo botón se elimine la cola de animaciones.*/
window.onload=()=>{
    $('#empezar').click(animar);

    $("#terminar").click(function(){
        $("div").stop(true);//Un solo true para toda la cola de eventos
    });
}

function animar(){
    let vertical=$("section").height()-10;
    
    $("div").animate({
        top:vertical
    },4000);
}