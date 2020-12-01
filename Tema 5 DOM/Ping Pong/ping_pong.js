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
        this.contadorIzq=0;
        this.contadorDcha=0;
        this.golpeado;

        this.circle=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttributeNS(null,"cx",this.x);
        this.circle.setAttributeNS(null,"cy",this.y);
        this.circle.setAttributeNS(null,"r",this.r);
        this.circle.setAttributeNS(null,"fill","black");

        contenedor.appendChild(this.circle);
    }

    // El metodo devuelve:
        // 0) Si no hay colision con contenedor (SVG)
        // 1) Si sale por izquierda
        // 2) Si sale por dcha
    moverBola(tamanoSVG){
        this.x+=this.velX;
        this.y+=this.velY;
        //let  colisionSVG = 0;
        if(this.x-this.r<=tamanoSVG.x){
            this.x=tamanoSVG.width/2;
            this.contadorDcha++;
            //colisionSVG =1;
        }else if(this.x+this.r>=tamanoSVG.width){
            this.x=tamanoSVG.width/2;
            this.contadorIzq++;
            //colisionSVG=2;
        }

        if(this.y-this.r<=tamanoSVG.y || this.y+this.r>=tamanoSVG.height)
            this.velY*=-1;

        //return colisionSVG;
    }

    colisionar(barra1,barra2){
        if(this.x-this.r<=barra1.x+barra1.ancho && this.y >=barra1.y && this.y<=barra1.y+barra1.alto){
            this.velX*=-1;
            this.velY=Math.floor(Math.random() * (2-(-2)) + (-2));
            this.golpeado=false;
        }else if(this.x+this.r>=barra2.x && this.y >= barra2.y && this.y<=barra2.y+barra2.alto){
            this.velX*=-1;
            this.velY=Math.floor(Math.random() * (2-(-2)) + (-2));
            this.golpeado=true;
        }
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
        //this.golpeado=false;
   
        this.barra1=new Barra(20,100,5,50,this.svg,this.tamanoSVG);//no puede ser this.tamanoSVG.y ya que 
        //eso cogería la y donde empieza el contenedor(ej 1000), no el cero dentro de ese 
        //contenedor
        this.barra2=new Barra(20,100,this.tamanoSVG.width-30,50,this.svg,this.tamanoSVG);

        this.bola=new Bola(this.tamanoSVG.width/2,this.tamanoSVG.height/2,20,5,5,this.svg);;

    }
    moverBarra(e){
        if(this.bola.golpeado==false){
            this.barra2.mover(e);
            this.barra2.dibujar();
        }else{
            this.barra1.mover(e);
            this.barra1.dibujar();
        }
    }
    pintarMarcador(){
        document.getElementById("j1").textContent=this.bola.contadorIzq;
        document.getElementById("j2").textContent=this.bola.contadorDcha;
    }
    mueveLaBola(){
        this.bola.moverBola(this.tamanoSVG);
        this.bola.colisionar(this.barra1,this.barra2);
        //let col = this.bola.moverBola(this.tamanoSVG);
        //if (col == 1){
            //jugadorIzq ++;
        this.pintarMarcador();
        //}
         
        this.bola.dibujarBola();
        
        window.requestAnimationFrame(() => this.mueveLaBola());
    }
    
}
//var contadorDcha=contadorIzq=0;

window.onload=() => {
    let svg=document.querySelector("svg");
    ///o en clase juego?
    let tamanoSVG=svg.getBoundingClientRect();
    
    /////
    let juego=new Juego(svg);
    ////////
    window.addEventListener("keyup",(e)=> juego.moverBarra(e));
    ////////
    window.requestAnimationFrame(() => juego.mueveLaBola());//para que no se pierda el this. Solo hay
    //que poner la funcion arrow en setInterval o requestAnimation
}


