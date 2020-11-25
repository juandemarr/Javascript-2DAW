var bolas;

window.onload=function (){
    //Crear bolas
    for(i=1; i<10; i++){
        let circ=document.createElementNS("http://www.w3.org/2000/svg","circle");
        //createElementNS porque svg es un elemento xml, y hay que indicarle un namespace
        circ.setAttribute(null,"cx", 20+(i*3));//si se usa createElementNS, 
        //para los atributos hay que usar createAttribute(null,nombre, valor)
        circ.setAttribute(null,"cy", 20+(i*3));
        circ.setAttribute(null,"r", 2*i);
        circ.setAttribute(null,"fill", "red");

        document.getElementsByTagName("svg")[0].appendChild(circ);
    }
    setInterval(animaTodasBolas,30);
    bolas=document.getElementsByTagName("circle");
    for(i=0; i<bolas.length; i++){
        bolas[i].velX=1*(i+1);
        bolas[i].velY=2*(i+1);
    }
}

function animaTodasBolas(){
    for(i=0; i<bolas.length;i++){
        animaUnaBola(bolas[i]);
    }
}

function animaUnaBola(bola){
    let radio=parseInt(bola.getAttribute("r"));
    let posXact=parseInt(bola.getAttribute("cx"))+bola.velX;
    bola.setAttribute("cx",posXact);
    
    let posYact=parseInt(bola.getAttribute("cy"))+bola.velY;
    bola.setAttribute("cy",posYact);

    
    //Detectar colisiones
    tamanoSVG=document.getElementsByTagName("svg")[0].getBoundingClientRect();
    if((posXact-radio) <= 0 || (posXact+radio) >= tamanoSVG.width)
        bola.velX *= -1;
    if((posYact-radio) <= 0 || (posYact+radio) >= tamanoSVG.height)//menos el radio 
    //es hacia arriba, ya que los valores negativos de la y estan arriba
        bola.velY *= -1;
}