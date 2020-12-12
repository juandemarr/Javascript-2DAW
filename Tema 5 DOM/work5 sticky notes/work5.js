var titulo,contenido,fecha,contenedor,notaEnMovimiento;
var pulsacion=false;
var notas={"listaNotas":[]};    //Array JSON vacio

window.onload=()=>{
    var boton=document.getElementById("botonAnadir");
    boton.addEventListener("click",anadirNota);

    contenedor=document.getElementById("tablero");

    recibirJSON();

    window.addEventListener("mousemove",moverNota);
}

function anadirNota(){
    titulo=document.getElementById("titulo").value;
    contenido=document.getElementById("textarea").value;
    fecha=Date.now();//al guardarlo en JSON se queda como string de milisegundos
    notas.listaNotas.push({"titulo":titulo,"contenido":contenido,"fecha":fecha});
    let notaActual=notas.listaNotas[notas.listaNotas.length-1];
    vistaNota(notaActual); //.length es la nota actual que hay, 
    //-1 porque al haber 1 nota es en el indice cero

    document.getElementsByTagName("section")[notas.listaNotas.length-1].addEventListener("click",pulsarNota);

    limpiar();
    localStorage.setItem("listaNotas",JSON.stringify(notas.listaNotas));
}

function vistaNota(nota){
    let section=document.createElement("section");

    let input=document.createElement("input");
    input.type="text";
    input.value=nota.titulo;
    section.appendChild(input);

    let contenido=document.createElement("textarea");
    contenido.appendChild(document.createTextNode(nota.contenido));
    section.appendChild(contenido);

    let parrafoFecha=document.createElement("p");
    
    parrafoFecha.appendChild(document.createTextNode("Hace "+Math.floor((Date.now()-parseInt(nota.fecha))/1000/60)+" minutos"));
    //resto a la fecha actual la fecha de la nota, cambiada a entero, entre 1000 para segundos y entre 60 para segundos. 
    //Por último redondeo a la baja
    section.appendChild(parrafoFecha);

    let botonEditar=document.createElement("button");
    botonEditar.appendChild(document.createTextNode("Actualizar"));
    section.appendChild(botonEditar);
    botonEditar.addEventListener("click",()=>{
        
        //Evento editar nota
        
        let tituloNota=document.querySelector("section").querySelector("input").value;
        let contenidoNota=document.querySelector("section").querySelector("textarea").value;
        nota.titulo=tituloNota;
        nota.contenido=contenidoNota;

        localStorage.setItem("listaNotas",JSON.stringify(notas.listaNotas));
    })

    let botonBorrar=document.createElement("button");
    botonBorrar.appendChild(document.createTextNode("Borrar"));
    section.appendChild(botonBorrar);
    botonBorrar.addEventListener("click",()=>{

        //Evento borrar nota
        
        let tituloNota=document.querySelector("section").querySelector("input").value;
        let indice=notas.listaNotas.indexOf(tituloNota);
        notas.listaNotas.splice(indice,1);
        
        section.remove();
        localStorage.setItem("listaNotas",JSON.stringify(notas.listaNotas));
    })

    contenedor.appendChild(section);
}

function limpiar(){
    document.getElementById("titulo").value="";
    document.getElementById("textarea").value="";
}

function recibirJSON(){
    let notasJSON=JSON.parse(localStorage.getItem("listaNotas"));
    if(notasJSON != null){
        for(let i=0; i<notasJSON.length; i++){
            notas.listaNotas.push(notasJSON[i]);
            vistaNota(notasJSON[i]);
            document.getElementsByTagName("section")[notas.listaNotas.length-1].addEventListener("click",pulsarNota);
        }
    }
}

//Eventos notas

function pulsarNota(e){
    if(e.target.localName=="section"){
        pulsacion=!pulsacion;
        notaEnMovimiento=e.currentTarget;
    }else
        e.stopPropagation();
}

function moverNota(ee){
    let tamanoContenedor = document.getElementById('tablero').getBoundingClientRect();    
    if(document.querySelector('section')!=null){
        let tamanoSection = document.querySelector('section').getBoundingClientRect();
        if(pulsacion){
            if(ee.y > tamanoContenedor.y && ee.x < tamanoContenedor.width-tamanoSection.width){
                notaEnMovimiento.style.left = ee.x+"px";
                notaEnMovimiento.style.top = ee.y+"px";
            }
        }
    }
}