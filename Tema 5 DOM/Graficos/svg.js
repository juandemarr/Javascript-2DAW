window.onload=main;

function main(){
    bola1=document.getElementById("bola1");//para que al llamar a la funcion anima, no tenga 
    //que buscar siempre la bola, asi solo la llama 1 vez
    bola2=document.getElementById("bola2");
    svg=document.getElementById("svg");
    setInterval(anima,100);//cada 30 milisegundos
    //lo pintara dentro del width y height de svg
}

var posX=0;
var posY=0;
var incX=2;
var incY=2;
var bola1,bola2;
var svg;

function anima(){
    bola1.setAttribute("cx",posX);
    bola1.setAttribute("cy",posY);
    posX+=incX;
    posY+=incY;
    if(posX>=500 || posY>=500){
        incX*=-1;//cambiar el signo al incremento
        incY*=-1;
    }
/////////////////////////////

    bola2.setAttribute("cx",posX);
    bola2.setAttribute("cy",posY);
    posX+=incX;
    posY+=incY;
    if(posX>=svg.getBoundingClientRect().width || posY>=svg.getBoundingClientRect().height){
        incX*=-1;
        incY*=-1;
    }
}

