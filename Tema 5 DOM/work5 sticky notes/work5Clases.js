class Notas{
    constructor(){
        this.arrayNotas=[];
    }
    add(nota){
        this.arrayNotas.push(nota);
        localStorage.setItem("notas",JSON.stringify(this.arrayNotas));
    }
}

class Nota{
    constructor(titulo,contenido,fecha){
        this.titulo=titulo;
        this.contenido=contenido;
        this.fecha=fecha;
        this.contador=0;
    }
    vista(contenedor){
        let section=document.createElement("section");
        /* let cont=this.contador++;
        section.id=cont; */

        let input=document.createElement("input");
        input.type="text";
        input.value=this.titulo;
        section.appendChild(input);

        let contenido=document.createElement("textarea");
        contenido.appendChild(document.createTextNode(this.contenido));
        section.appendChild(contenido);

        let parrafoFecha=document.createElement("p");
        parrafoFecha.appendChild(document.createTextNode(this.fecha));
        section.appendChild(parrafoFecha);

        let botonEditar=document.createElement("button");
        botonEditar.appendChild(document.createTextNode("Editar"));
        section.appendChild(botonEditar);

        let botonBorrar=document.createElement("button");
        botonBorrar.appendChild(document.createTextNode("Borrar"));
        section.appendChild(botonBorrar);

        contenedor.appendChild(section);
    }
    mover(){

    }
}
/* let nota={
    "Nota":[
        {
            "titulo":"as",
            "texto":"",
            "tiempo":""
        }
    ]
} */

var arrayNotas,nota,tituloInput,contenidoTextarea,contenedor;

window.onload=()=>{
    
    arrayNotas=new Notas();

    let boton=document.getElementById("botonAnadir");
    boton.addEventListener("click",anadirNota);

    contenedor=document.getElementById("tablero");
    usarJSON();
    
}

function anadirNota(){
    tituloInput=document.getElementById("titulo").value;
    contenidoTextarea=document.getElementById("textarea").value;
    //contenedor=document.getElementById("tablero");

    nota=new Nota(tituloInput,contenidoTextarea,new Date());
    arrayNotas.add(nota);
    nota.vista(contenedor);

    limpiar();
}

function limpiar(){
    document.getElementById("titulo").value="";
    document.getElementById("textarea").value="";
}

function usarJSON(){
    let notasJSON=JSON.parse(localStorage.getItem("notas"));
    if(notasJSON != null)
        for(let i=0; i<notasJSON.length; i++){
            let notaJSON=new Nota(notasJSON[i].titulo,notasJSON[i].contenido,notasJSON[i].fecha);
            arrayNotas.add(notaJSON);
            notaJSON.vista(contenedor);
        }
}