/*Mejora el ejercicio anterior para que se pueda hacer en una página con un número
cualquiera de imágenes.*/

function main(){
    const body=document.querySelector('body');
    const imagen1=document.getElementById("visas");
    const imagen2=document.getElementById("kitana");
    const imagen3=document.getElementById("lyn");

    body.addEventListener('mousemove',mover);
    imagen1.addEventListener('click',pincharImg);
    imagen2.addEventListener('click',pincharImg);
    imagen3.addEventListener('click',pincharImg);
}

arrastrar=false;

function pincharImg(){
    arrastrar=!arrastrar;
}
function mover(mv){
    if(arrastrar){
        mv.target.style.left=mv.x+"px";//También con getElementById
        mv.target.style.top=mv.y+"px";
    }
}

