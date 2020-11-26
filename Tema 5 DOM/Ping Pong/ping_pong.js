class Barra{
    constructor(ancho,alto,x,y,contenedor,tamanoContenedor){
        this.ancho=ancho;
        this.alto=alto;
        this.x=x;
        this.y=y;

        this.rect=document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.rect.setAttributeNS(null,"width",this.ancho);
        this.rect.setAttributeNS(null,"height",this.alto);
        this.rect.setAttributeNS(null,"x",this.x);
        this.rect.setAttributeNS(null,"y",this.y);
        this.rect.setAttributeNS(null,"style","fill:#6d0000;stroke:black;stroke-width:4");

        contenedor.appendChild(this.rect);

    }
    mover(evento){
        if(evento.isComposing || evento.keyCode===229){
        }else{
            if(evento.code=='KeyW'){
                this.y-=30;
                //console.log(this.top);
            }else if(evento.code=='KeyS'){
                this.y+=30;
                //console.log(this.top);  
            }
        }
    }
    dibujar(){
        this.rect.setAttributeNS(null,"x",this.x);
        this.rect.setAttributeNS(null,"y",this.y);
    }
}

class Bola{
    constructor(x,y,r,velX,velY,contenedor){
        this.x=x;
        this.y=y;
        this.r=r;
        this.velX=velX;
        this.velY=velY;

        this.circle=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttributeNS(null,"cx",this.x);
        this.circle.setAttributeNS(null,"cy",this.y);
        this.circle.setAttributeNS(null,"r",this.r);
        this.circle.setAttributeNS(null,"fill","black");

        contenedor.appendChild(this.circle);
    }
    moverBola(){

    }
    dibujarBola(){

    }
}


var barra1,barra2,bola;

window.onload=() => {
    let svg=document.querySelector("svg");
    let tamanoSVG=document.querySelector("svg").getBoundingClientRect();
//Barras    
    barra1=new Barra(20,100,4,4,svg);
    barra2=new Barra(20,100,tamanoSVG.width-30,4,svg);
//Bola
    bola=new Bola(tamanoSVG.width/2,tamanoSVG.height/2,20,5,5,svg);

    window.addEventListener("keyup",moverBarra);
}
function moverBarra(e){
    barra1.mover(e);
    barra1.dibujar();
    barra2.mover(e);
    barra2.dibujar();
}
