class Barra{
    constructor(ancho,alto,x,y,contenedor,tamanoContenedor){
        this.ancho=ancho;
        this.alto=alto;
        this.x=x;
        this.y=y;
        this.contenedor=tamanoContenedor;

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
            if(evento.code=='KeyW' && this.y>this.contenedor.y){
                this.y-=30;
            }else if(evento.code=='KeyS' && this.y<this.contenedor.height-124){
                this.y+=30;
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

    moverBola(tamanoSVG){
        this.x+=this.velX;
        this.y+=this.velY;

        if(this.x-this.r<=tamanoSVG.x){
            this.x=tamanoSVG.width/2;
            jugadorDcha++;
        }else if(this.x+this.r>=tamanoSVG.width){
            this.x=tamanoSVG.width/2;
            jugadorIzq++;
        }

        if(this.y-this.r<=tamanoSVG.y || this.y+this.r>=tamanoSVG.height)
            this.velY*=-1;
    }

    colisionar(barra1,barra2){
        if(this.x-this.r<=barra1.x+barra1.ancho && this.y >=barra1.y && this.y<=barra1.y+barra1.alto){
            this.velX*=-1;
            this.velY=Math.floor(Math.random() * (2-(-2)) + (-2));
            golpeado=false;

        }else if(this.x+this.r>=barra2.x && this.y >= barra2.y && this.y<=barra2.y+barra2.alto){
            this.velX*=-1;
            this.velY=Math.floor(Math.random() * (2-(-2)) + (-2));
            golpeado=true;
        }
    }

    dibujarBola(){
        this.circle.setAttributeNS(null,"cx",this.x);
        this.circle.setAttributeNS(null,"cy",this.y);
    }
}


var barra1,barra2,bola;
var jugadorDcha=jugadorIzq=0;
var golpeado=false;
var tamanoSVG;

window.onload=() => {
    let svg=document.querySelector("svg");
    tamanoSVG=document.querySelector("svg").getBoundingClientRect();
//Barras    
    barra1=new Barra(20,100,tamanoSVG.x,tamanoSVG.y,svg,tamanoSVG);
    barra2=new Barra(20,100,tamanoSVG.width-30,tamanoSVG.y,svg,tamanoSVG);
//Bola
    bola=new Bola(tamanoSVG.width/2,tamanoSVG.height/2,20,5,5,svg);
////////
    window.addEventListener("keyup",moverBarra);
////////
    window.requestAnimationFrame(mueveLaBola);
    pintarMarcador();
}


function moverBarra(e){
    if(golpeado==false){
        barra2.mover(e);
        barra2.dibujar();
    }else{
        barra1.mover(e);
        barra1.dibujar();
    }
}

function mueveLaBola(){
    bola.moverBola(tamanoSVG);
    bola.colisionar(barra1,barra2);
    bola.dibujarBola();
    
    window.requestAnimationFrame(mueveLaBola);
}
function pintarMarcador(){
    let titulo1=document.getElementById("j1").textContent;
    document.getElementById("j1").textContent=titulo1+jugadorIzq;

    let titulo2=document.getElementById("j2").textContent;
    document.getElementById("j2").textContent=titulo2+jugadorDcha;
}
