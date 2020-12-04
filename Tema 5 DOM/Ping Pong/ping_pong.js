//En página web: juandemarr.myartsonline.com/javascript-pingPong
class Barra{
    constructor(ancho,alto,x,y,contenedor,tamanoContenedor){
        this.ancho=ancho;
        this.alto=alto;
        this.x=x;
        this.y=y;
        this.tamanoContenedor=tamanoContenedor;

        this.rect=document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.rect.setAttributeNS(null,"width",this.ancho);
        this.rect.setAttributeNS(null,"height",this.alto);
        this.rect.setAttributeNS(null,"x",this.x);
        this.rect.setAttributeNS(null,"y",this.y);
        this.rect.setAttributeNS(null,"fill","#07c007");
        contenedor.appendChild(this.rect);
    }
    mover(evento){
        if(evento.isComposing || evento.keyCode===229){
        }else{
            if(evento.code=='KeyW' && this.y>=10){
                this.y-=30;
            }else if(evento.code=='KeyS' && this.y<=this.tamanoContenedor.height-this.alto){
                this.y+=30;
            }
        }
    }
    /////touch event
    moverTactil(evento){
        evento.preventDefault();
        if(evento.touches[0].pageY>=0 && evento.touches[0].pageY<=this.tamanoContenedor.height-this.alto)
            this.y=evento.touches[0].pageY;
    }
    ////////////
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
        this.golpeado=false;

        this.circle=document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.circle.setAttributeNS(null,"cx",this.x);
        this.circle.setAttributeNS(null,"cy",this.y);
        this.circle.setAttributeNS(null,"r",this.r);
        this.circle.setAttributeNS(null,"fill","rgba(205, 219, 2, 0.952)");        
        contenedor.appendChild(this.circle);
    }
    // Otra forma: El metodo devuelve:
        // 0) Si no hay colision con contenedor (SVG)
        // 1) Si sale por izquierda
        // 2) Si sale por derecha
    moverBola(tamanoSVG){
        this.posAnteriorX=this.x;
        this.posAnteriorY=this.y;

        //let  colisionSVG = 0;
        if(this.x-this.r<=0){
            this.x=tamanoSVG.width/2;
            this.y=tamanoSVG.height/2;
            this.velY=Math.floor(Math.random() * (2-(-2)) + (-2));

            this.contadorDcha++;
            //colisionSVG =1;
        }else if(this.x+this.r>=tamanoSVG.width){
            this.x=tamanoSVG.width/2;
            this.y=tamanoSVG.height/2;
            this.velY=Math.floor(Math.random() * (2-(-2)) + (-2));

            this.contadorIzq++;
            //colisionSVG=2;
        }

        if(this.y-this.r<=0 || this.y+this.r>=tamanoSVG.height)
            this.velY*=-1;

        this.x+=this.velX;
        this.y+=this.velY;
        //return colisionSVG;
    }
    colisionar(barra1,barra2){
        if(this.x-this.r<=barra1.x+barra1.ancho && this.y >=barra1.y && this.y<=barra1.y+barra1.alto){
            this.velX*=-1;
            this.velY=Math.floor(Math.random() * (3-(-3)) + (-3));
            
            this.x=this.posAnteriorX;
            this.y=this.posAnteriorY;
            
            this.golpeado=false;
        }else if(this.x+this.r>=barra2.x && this.y >= barra2.y && this.y<=barra2.y+barra2.alto){
            this.velX*=-1;
            this.velY=Math.floor(Math.random() * (3-(-3)) + (-3));

            this.x=this.posAnteriorX;
            this.y=this.posAnteriorY;

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
        
        //Dibujar pista de tenis
        //Red
        this.line=document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttributeNS(null,"x1",this.tamanoSVG.width/2);
        this.line.setAttributeNS(null,"y1",0);
        this.line.setAttributeNS(null,"x2",this.tamanoSVG.width/2);
        this.line.setAttributeNS(null,"y2",this.tamanoSVG.height);
        this.line.setAttributeNS(null,"stroke","rgb(207, 207, 207)");
        this.line.setAttributeNS(null,"stroke-width","10");
        contenedorSVG.appendChild(this.line);
        //Cuadrantes de saque
        this.line=document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttributeNS(null,"x1",this.tamanoSVG.width/4-40);
        this.line.setAttributeNS(null,"y1",0);
        this.line.setAttributeNS(null,"x2",this.tamanoSVG.width/4-40);
        this.line.setAttributeNS(null,"y2",this.tamanoSVG.height);
        this.line.setAttributeNS(null,"stroke","rgb(207, 207, 207)");
        this.line.setAttributeNS(null,"stroke-width","2");
        contenedorSVG.appendChild(this.line);

        this.line=document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttributeNS(null,"x1",this.tamanoSVG.width/4*3+40);
        this.line.setAttributeNS(null,"y1",0);
        this.line.setAttributeNS(null,"x2",this.tamanoSVG.width/4*3+40);
        this.line.setAttributeNS(null,"y2",this.tamanoSVG.height);
        this.line.setAttributeNS(null,"stroke","rgb(207, 207, 207)");
        this.line.setAttributeNS(null,"stroke-width","2");
        contenedorSVG.appendChild(this.line);
        //Linea horizontal del medio
        this.line=document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttributeNS(null,"x1",this.tamanoSVG.width/4-40);
        this.line.setAttributeNS(null,"y1",this.tamanoSVG.height/2);
        this.line.setAttributeNS(null,"x2",this.tamanoSVG.width/4*3+40);
        this.line.setAttributeNS(null,"y2",this.tamanoSVG.height/2);
        this.line.setAttributeNS(null,"stroke","rgb(207, 207, 207)");
        this.line.setAttributeNS(null,"stroke-width","2");
        contenedorSVG.appendChild(this.line);

        //Pasillo de dobles
        this.line=document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttributeNS(null,"x1",0);
        this.line.setAttributeNS(null,"y1",40);
        this.line.setAttributeNS(null,"x2",this.tamanoSVG.width);
        this.line.setAttributeNS(null,"y2",40);
        this.line.setAttributeNS(null,"stroke","rgb(207, 207, 207)");
        this.line.setAttributeNS(null,"stroke-width","2");
        contenedorSVG.appendChild(this.line);
        
        this.line=document.createElementNS("http://www.w3.org/2000/svg", "line");
        this.line.setAttributeNS(null,"x1",0);
        this.line.setAttributeNS(null,"y1",this.tamanoSVG.height-50);
        this.line.setAttributeNS(null,"x2",this.tamanoSVG.width);
        this.line.setAttributeNS(null,"y2",this.tamanoSVG.height-50);
        this.line.setAttributeNS(null,"stroke","rgb(207, 207, 207)");
        this.line.setAttributeNS(null,"stroke-width","2");
        contenedorSVG.appendChild(this.line);
        //////////

        this.barra1=new Barra(20,100,5,0,this.svg,this.tamanoSVG);//no puede ser this.tamanoSVG.y ya que 
        //eso cogería la y donde empieza el contenedor(ej 1000), no el cero dentro de ese 
        //contenedor
        this.barra2=new Barra(20,100,this.tamanoSVG.width-30,0,this.svg,this.tamanoSVG);
        this.bola=new Bola(this.tamanoSVG.width/2,this.tamanoSVG.height/2,20,6,3,this.svg);
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
    moverBarraTactil(e){
        if(this.bola.golpeado==false){
            this.barra2.moverTactil(e);
            this.barra2.dibujar();
        }else{
            this.barra1.moverTactil(e);
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
            //this.contadorIzq++;
        this.pintarMarcador();
        //}
        this.bola.dibujarBola();
        
        window.requestAnimationFrame(() => this.mueveLaBola());
    }
}
var juego;
window.onload=() => {
    funcionarJuego();    
}
window.onresize=() => {
    document.querySelector("svg").remove();
    let main=document.getElementById("main");
    main.appendChild(document.createElementNS("http://www.w3.org/2000/svg","svg"));
    funcionarJuego();  
}
function funcionarJuego(){
    let svg=document.querySelector("svg");    
    juego=new Juego(svg);
    svg.addEventListener("touchmove",(e)=> juego.moverBarraTactil(e));
    window.addEventListener("keyup",(e)=> juego.moverBarra(e));
    window.requestAnimationFrame(() => juego.mueveLaBola());
    //para que no se pierda el this se pone funcion arrow.
    //Solo hay que ponerla en setInterval o requestAnimation
}
