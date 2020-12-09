class Notas{
    constructor(){
        this.arrayNotas=[];
    }
    add(nota){
        this.arrayNotas.push(nota);
    }
}

class Nota{
    contructor(titulo,contenido){
        this.titulo=titulo;
        this.contenido=contenido;
        this.fecha=new Date();
        this.contador=0;
    }
    vista(contenedor){
        let div=document.createElement("div");
        div.id=this.contador++;

        /*let label=document.createElement("label");
        label.appendChild(document.createTextNode("Titulo: "+this.titulo));
        div.appendChild(label); */

        let input=document.createElement("input");
        input.type="text";
        input.value=this.titulo;
        div.appendChild(input);

        /*let p=document.createElement("p");
        p.appendChild(document.createTextNode("Contenido: ")); 
        div.appendChild(p);*/

        let contenido=document.createElement("textarea");
        contenido.appendChild(document.createTextNode(this.contenido));
        div.appendChild(contenido);

        let parrafoFecha=document.createElement("p");
        parrafoFecha.appendChild(document.createTextNode(this.fecha));
        div.appendChild(parrafoFecha);

        let botonEditar=document.createElement("button");
        botonEditar.appendChild(document.createTextNode("Editar"));
        div.appendChild(botonEditar);

        let botonBorrar=document.createElement("button");
        botonBorrar.appendChild(document.createTextNode("Borrar"));
        div.appendChild(botonBorrar);

        contenedor.appendChild(div);
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

let nota;

window.onload=()=>{
    let boton=document.getElementById("botonAnadir");
    boton.addEventListener("click",anadirNota);
    
}

function anadirNota(){
    let titulo=document.getElementById("titulo").value;
    let contenido=document.getElementById("textarea").value;
    let contenedor=document.getElementById("tablero");

    nota=new Nota(titulo,contenido);
    nota.vista(contenedor);
}
