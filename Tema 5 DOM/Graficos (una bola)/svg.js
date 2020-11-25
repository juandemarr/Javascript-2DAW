window.onload=main;

function main(){
    bola1=document.getElementById("bola1");//para que al llamar a la funcion anima, no tenga 
    //que buscar siempre la bola, asi solo la llama 1 vez
    bola2=document.getElementById("bola2");
    svg=document.getElementById("svg");
    setInterval(anima,10);//cada 10 milisegundos
    //lo pintara dentro del width y height de svg
}

var bola1,bola2;
var posX=0;
var posY=0;
var incX=3;
var incY=3;
var svg;
var posX2=50;
var posY2=40;
var incX2=3;
var incY2=1;

function anima(){
    bola1.setAttribute("cx",posX);
    bola1.setAttribute("cy",posY);
    posX+=incX;
    posY+=incY;
    if(posX>=500 || posY>=500 || posX<=0 || posY<=0){
        incX*=-1;//cambiar el signo al incremento
        incY*=-1;
    }
/////////////////////////////

    bola2.setAttribute("cx",posX2);
    bola2.setAttribute("cy",posY2);
    posX2+=incX2;
    posY2+=incY2;
    if(posX2>=svg.getBoundingClientRect().width || posY2>=svg.getBoundingClientRect().height || posX2<=0 || posY2<=0){
        incX2*=-1;
        incY2*=-1;
    }
}

