/*Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.*/
window.onload=main;//como escribir en el html <body onload="main()">
var imagenesMov;
var arrastrar=false;
function main(){
    imagenesMov=document.querySelectorAll("img");//para aplicarle los eventos a cualquiera de las imagenes
    //solo querySelectorAll() devuelve un array, getElementByTagName NO

    imagenesMov.forEach((imagen) => {
        imagen.addEventListener('click',pincharImg);
    }); 
    window.addEventListener('mousemove',mover);

}//al body (window) le pongo el evento mover, del cual obtengo las coordenadas que se las aplico a cada imagen 
//que haya pinchado, en la funcion mover. Esa imagen pinchada la obtengo de la funcion pincharImg

function pincharImg(img){
    arrastrar=!arrastrar;
    imagenMov=img.currentTarget;
}
function mover(mv){
    if(arrastrar){
        imagenMov.style.left=mv.x+"px";//También con getElementById
        imagenMov.style.top=mv.y+"px";
    }
}

