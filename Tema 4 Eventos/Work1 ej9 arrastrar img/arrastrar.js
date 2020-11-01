/*Crea una página web que haciendo uso de eventos permita arrastrar una imagen
haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que vuelvo
a hacer click).*/
function main(){
    const body=document.querySelector('body');//3 forma con addEventListener
    const imagen=document.querySelector('img');
    //pincharImg;//2 forma con js en html
    //mover;//2
    body.addEventListener('mousemove',mover);//3
    imagen.addEventListener('click',pincharImg);//3
}

arrastrar=false;

function pincharImg(){
    arrastrar=!arrastrar;
}
function mover(mv){
    if(arrastrar){
        document.querySelector('img').style.left=mv.x+"px";
        //Otra forma: mv.target.style...
        document.querySelector('img').style.top=mv.y+"px";
    }
}

