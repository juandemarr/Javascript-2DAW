class Barra{
    constructor(up,down){
        this.up=up;
        this.down=down;
    }
    mover(evento){
        let tamano=parseInt(barraIzquierda.style.top.substring(0,barraIzquierda.style.top.indexOf("p")));
    
        if(evento.isComposing || evento.keyCode===229){
    
        }else{
            if(evento.code==this.up){
                tamano-=30;
                //console.log(tamano);
            }else if(evento.code==this.down){
                tamano+=30;
                //console.log(tamano);  
            }
        }
        return tamano;
    }
    dibujar(x){
        barraIzquierda.style.top=x+"px";
        //console.log(barraIzquierda.style.top);
    }
}

window.onload=main;
var barraIzquierda,barraDerecha;
var barra=new Barra('KeyW','KeyS');

function main(){
    
    barraIzquierda=document.getElementById("barraIzquierda");
    barraDerecha=document.getElementById("barraDerecha");
    barraIzquierda.style.top=0+"px";

    window.addEventListener("keyup",moverIzquierda);
}
function moverIzquierda(e){
    barra.mover(e);
    barra.dibujar(barra.mover(e));
}
