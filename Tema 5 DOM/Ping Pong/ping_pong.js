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

    // El metodo devuelve:
    // 0) Si no hay colision con contenedor (SVG)
    // 1) Si sale por izquierdaç
    // 2) Si sale por dcha
    colisionar(barra1,barra2){
        let  colisionSVG = 0;

        if(this.x-this.r<=barra1.x+barra1.ancho && this.y >=barra1.y && this.y<=barra1.y+barra1.alto){
            this.velX*=-1;
            this.velY=Math.floor(Math.random() * (2-(-2)) + (-2));
            golpeado=false;
            colisionSVG =1;

        }else if(this.x+this.r>=barra2.x && this.y >= barra2.y && this.y<=barra2.y+barra2.alto){
            this.velX*=-1;
            this.velY=Math.floor(Math.random() * (2-(-2)) + (-2));
            golpeado=true;
            colisionSVG=2;
        }

        return colisionSVG;
    }

    dibujarBola(){
        this.circle.setAttributeNS(null,"cx",this.x);
        this.circle.setAttributeNS(null,"cy",this.y);
    }
}

class Juego{
    constructor(contenedorSVG){
        this.svg=contenedorSVG;
        this.tamanoSVG=contenedorSVG.getBoundingClientRect();
        this.golpeado=false;
    //Barras    
        this.barra1=new Barra(20,100,0,0,this.svg,this.tamanoSVG);//no puede ser this.tamanoSVG.y ya que 
        //eso cogería la y donde empieza el contenedor(ej 1000), no el cero dentro de ese 
        //contenedor
        this.barra2=new Barra(20,100,this.tamanoSVG.width-30,0,this.svg,this.tamanoSVG);
    //Bola
        this.bola=new Bola(this.tamanoSVG.width/2,this.tamanoSVG.height/2,20,5,5,this.svg);
    ////////
        window.addEventListener("keyup",moverBarra);
    ////////
        window.requestAnimationFrame(mueveLaBola);
    }
    moverBarra(e){
        if(golpeado==false){
            barra2.mover(e);
            barra2.dibujar();
        }else{
            barra1.mover(e);
            barra1.dibujar();
        }
    }
    mueveLaBola(){
        bola.moverBola(tamanoSVG);
        let col = bola.colisionar(barra1,barra2);
        if (col == 1){
            jugadorIzq ++;
            pintarMarcador();
        }
         
        bola.dibujarBola();
        
        window.requestAnimationFrame(mueveLaBola);
    }
}
var jugadorDcha=jugadorIzq=0;

window.onload=() => {
    let svg=document.querySelector("svg");
    new Juego(svg);
    
}

function pintarMarcador(){
    let titulo1=document.getElementById("j1").textContent;
    document.getElementById("j1").textContent=titulo1+jugadorIzq;

    let titulo2=document.getElementById("j2").textContent;
    document.getElementById("j2").textContent=titulo2+jugadorDcha;
}
