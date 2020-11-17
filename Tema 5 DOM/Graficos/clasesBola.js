var bolas;

class bola{
    constructor(radio,color,x,y,velX,velY){
        this.r=radio;
        this.color=color;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        //Crear su representacion en pantalla
        this.circ=document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.circ.setAttribute(null,"cx", this.x);
        this.circ.setAttribute(null,"cy", this.y);
        this.circ.setAttribute(null,"r", this.r);
        this.circ.setAttribute(null,"fill", this.color);

        document.getElementsByTagName("svg")[0].appendChild(this.circ);

    }
    dibuja(){
        
        let posXact=parseInt(this.circ.getAttribute("cx"))+this.circ.velX;
        this.circ.setAttribute("cx",posXact);
        
        let posYact=parseInt(this.circ.getAttribute("cy"))+this.circ.velY;
        this.circ.setAttribute("cy",posYact);

        
        //Detectar colisiones
        tamanoSVG=document.getElementsByTagName("svg")[0].getBoundingClientRect();
        if((posXact-radio) <= 0 || (posXact+radio) >= tamanoSVG.width)
            this.velX *= -1;
        if((posYact-radio) <= 0 || (posYact+radio) >= tamanoSVG.height)
            this.velY *= -1;
    }
}

window.onload=function (){
    //Crear bolas
    bolas=[];
    for(i=1; i<10; i++){
        bolas.push(new bola(10,"red",3,4,10,3));
    }
    setInterval(animaTodasBolas,30);
    
    
}

function animaTodasBolas(){
    for(i=0; i<bolas.length;i++){
        bolas[i].dibuja();
    }
}
