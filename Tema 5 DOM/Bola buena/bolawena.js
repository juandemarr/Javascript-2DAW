class Bola{
    constructor(posicionX,posicionY,radio,color,velocidadX,velocidadY,contenedor){
        this.x=posicionX;
        this.y=posicionY;
        this.r=radio;
        this.color=color;
        this.velX=velocidadX;
        this.velY=velocidadY;

        //Crear el tag
        this.circle=document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.circle.setAttributeNS(null, "cx", this.x);
        this.circle.setAttributeNS(null, "cy", this.y);
        this.circle.setAttributeNS(null, "r", this.r);
        this.circle.setAttributeNS(null, "fill", this.color);
        
        contenedor.appendChild(this.circle);
    }

    mueve(ancho,alto){
        this.posicionAnteriorX=this.x;
        this.posicionAnteriorY=this.y;

        this.x+=this.velX;
        this.y+=this.velY;

        if(this.x-this.r<=0 || this.x+this.r>=ancho){
            this.velX *= -1;
            
            if(this.x-this.r<=0)
                this.x=this.r;//Si se ha pasado, el punto x(el centro de la bola) será 
                            //lo que valga el radio, por lo que no se saldrá
            else
                this.x=ancho-this.r;  //sino se ha salido, el centro de la bola (x) 
                //será el ancho de la ventana menos el radio (1000-10=990, donde 
                //estará el centro de la bola)         
        }

        if(this.y-this.r<=0 || this.y+this.r>=alto){//la y negativa va hacia arriba
            this.velY *= -1;
            this.y=(this.y-this.r<=0) ? this.r : alto-this.r;
        }
    }

    colisiona(otraBola){
        let xx=this.x-otraBola.x;
        let yy=this.y-otraBola.y;
        let distancia=Math.sqrt(Math.pow(xx,2)+Math.pow(yy,2));

        if(distancia <= this.r+otraBola.r){
            this.velX *= -1;
            this.velY *= -1;
            
            this.x=this.posicionAnteriorX;//para que no se solape nada en ningún momento
            this.y=this.posicionAnteriorY;
        }
    }

    dibuja(){
        this.circle.setAttributeNS(null,"cx",this.x);
        this.circle.setAttributeNS(null,"cy",this.y);
    }
}



function aleatorio(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}
function colorAleatorio(){
    return "rgb("+aleatorio(0,255)+","+aleatorio(0,255)+","+aleatorio(0,255)+")";
}

function animaBolas(){
    tamanoSVG=contenedorSVG.getBoundingClientRect();

    for(let i=0; i<bolas.length; i++){//2 bucles para recorrer el mismo array de bolas
        bolas[i].mueve(tamanoSVG.width,tamanoSVG.height);

        for(let j=0; j<bolas.length; j++){
            if(i!=j)
                bolas[i].colisiona(bolas[j]);
        }
        bolas[i].dibuja();
    }
    window.requestAnimationFrame(animaBolas);
}


var contenedorSVG;
var bolas=[];

window.onload=()=>{
    contenedorSVG=document.getElementsByTagName("svg")[0];

    //para crear las bolas
    for(let i=0; i<10; i++){
        bolas.push(new Bola(aleatorio(100,600), aleatorio(50,700), aleatorio(10,30), colorAleatorio(), aleatorio(1,10), aleatorio(1,10), contenedorSVG));
    }

    //setInterval(animaBolas,20);
    //esta funcion es la misma pero propia de navegadores modernos para que cojan 
    //el tiempo que estimen para hacer el bucle

    //se pone aquí y dentro del bucle animaBolas tbn
    window.requestAnimationFrame(animaBolas);

}
