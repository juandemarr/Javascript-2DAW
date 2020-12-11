var titulo,contenido,contenedor,notaEnMovimiento;
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

    notas.listaNotas.push({"titulo":titulo,"contenido":contenido,"fecha":Date.now()});
    let notaActual=notas.listaNotas[notas.listaNotas.length-1];
    vistaNota(notaActual); //.length es la nota actual que hay, 
    //-1 porque al haber 1 nota es en el indice cero

/*     let sectionActual=document.getElementsByTagName("section")[notas.listaNotas.length-1];
    sectionActual.addEventListener("click",pulsarNota); */
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
    parrafoFecha.appendChild(document.createTextNode(nota.fecha));
    section.appendChild(parrafoFecha);

    let botonEditar=document.createElement("button");
    botonEditar.appendChild(document.createTextNode("Editar"));
    section.appendChild(botonEditar);

    let botonBorrar=document.createElement("button");
    botonBorrar.appendChild(document.createTextNode("Borrar"));
    section.appendChild(botonBorrar);

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

        /* agregarEvento(); */
    }
}

//Eventos notas

function pulsarNota(e){
    pulsacion=!pulsacion;
    notaEnMovimiento=e.currentTarget;
}

/* function moverNota(ee){
     let tamanoContenedor=document.getElementById('tablero').getBoundingClientRect(); 
    if(pulsacion){
         if(ee.y > tamanoContenedor.y && ee.x < tamanoContenedor.width){ 
            notaEnMovimiento.style.left=ee.x+"px";
            notaEnMovimiento.style.top=ee.y+"px";
        }
    }
 } */

function moverNota(ee){
    let tamanoContenedor = document.getElementById('tablero').getBoundingClientRect();
    let tamanoSection = document.querySelector('section').getBoundingClientRect();
    if(pulsacion){
        if(ee.y > tamanoContenedor.y && ee.x < tamanoContenedor.width-tamanoSection.width){
            notaEnMovimiento.style.left = ee.x+"px";
            notaEnMovimiento.style.top = ee.y+"px";
        }
    }
}