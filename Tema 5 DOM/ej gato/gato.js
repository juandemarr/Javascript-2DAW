class Gato{
    constructor(nombre,rutaImagen){
        this.nombre=nombre;
        this.rutaImagen=rutaImagen;
        this.contador=0;
    }
}


var gatos=[];
var imagen;
var pContador;
window.onload=() => {
    let gato1=new Gato("CT-5555","img/gato1.jpg");
    let gato2=new Gato("CT-6749", "img/gato2.jpg");

    gatos.push(gato1);
    gatos.push(gato2);

    imagen=document.querySelector("img");
    pContador=document.querySelector("p");
    let li;
    let ul=document.querySelector("ul");
    gatos.forEach( (gatito,i)  => {//si le paso otro parametro a forEach, ese indicará el índice
        li=document.createElement("li");
        li.appendChild(document.createTextNode(gatito.nombre));
        li.numGato=i //se pueden crear atributos a cualquier elemento sin mas
        ul.appendChild(li);
        li.addEventListener("click",pulsado);
    });

    //////////////////////
    document.getElementById("boton").addEventListener("mouseenter",(e)=>{
        e.target.style.backgroundColor="orange";
    })
    document.getElementById("boton").addEventListener("mouseleave",(e)=>{
        e.target.style.backgroundColor="white";
    })
    //////////////////
}

function pulsado(e){
    let objetoGato=gatos[e.target.numGato];
    imagen.src=objetoGato.rutaImagen;
    imagen.i=e.target.numGato;
    pContador.textContent=gatos[e.target.numGato].contador;
    imagen.addEventListener("click",sumaContador);
}
function sumaContador(e){
    gatos[e.target.i].contador++;//esta i es el atributo creado arriba, sobre imagen para que guarde el numero
    pContador.textContent=gatos[e.target.i].contador;
}
