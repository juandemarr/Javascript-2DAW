/*Create a class BookList

* Create another class called Book

* BookLists should have the following properties:
  x Number of books marked as read
  x Number of books marked not read yet
  x A reference to the next book to read (book object)
  x A reference to the current book being read (book object)
  x A reference to the last book read (book object)
  x An array of all the Books
* Each Book should have several properties:
  x Title
  x Genre
  x Author
  x Read (true or false)
  x Read date, can be blank, otherwise needs to be a JS Date() object
* Every Booklist should have a few methods:

x   .add(book)
        should add a book to the books list.
.finishCurrentBook()
    should mark the book that is currently being read as "read"
    Give it a read date of new Date(Date.now())
    Change the last book read to be the book that just got finished
    Change the current book to be the next book to be read
    Change the next book to be read property to be the first unread book you find in the 
    list of books
* Booklists and Books might need more methods than that. Try to think of more that 
might be useful.*/
//Considero que en el array ya pueden haber libros leidos y no leidos
class Book{
    constructor(title,author,genre){
        this.title=title;
        this.author=author;
        this.genre=genre;
        this.read=false;
        this.readDate=null;
    }
}

class Booklist{
    constructor(){
        this.listaLibros=[];
        this.currentBookIndex=0;
        this.lastBookRead=null;
    }

    get numberRead(){
        let cont=0;
        for(let i=0; i<this.listaLibros.length; i++){
            if(this.listaLibros[i].read==true)
                cont++;
        }
        return cont;
    }

    get numberNoRead(){
        return this.listaLibros.length-this.numberRead;
    }

    get nextBookRead(){
        for(let i=this.currentBookIndex; i<this.listaLibros.length; i++){
            if(this.listaLibros[i].read==false)
                return this.listaLibros[i];
            else
                return null;
        }
    }

    get currentBookRead(){
        for(let i=0; i<this.listaLibros.length; i++){
            if(this.listaLibros[i].read==false){
                this.currentBookIndex=i;
                return this.listaLibros[i];
            }else
                return null;
        }
    }

    ///////MÉTODOS

    add(book){
        this.listaLibros.push(book);
    }

    finishCurrentBook(){
        if(this.currentBookIndex<this.listaLibros.length){
            this.listaLibros[this.currentBookIndex].read=true;
            this.listaLibros[this.currentBookIndex].readDate=new Date(Date.now()).toLocaleString();
            this.lastBookRead=this.listaLibros[this.currentBookIndex];
            this.currentBookIndex++;
        }   
    }
}


///////////////////////////////////////////////////////
/*MÉTODOS DE LA INTERFAZ*/

window.onload=main;
var lista,divTabla;

function main(){
    lista=new Booklist();
    let botonLibro=document.getElementById("addBook");
    botonLibro.addEventListener("click",anadirLibro);

    divTabla=document.getElementById("divTabla");

    tablaVacia();
    crearBoton();
}

function tablaVacia(){
    let elementoTabla=document.createElement("table");
    elementoTabla.id="tabla";
    divTabla.appendChild(elementoTabla);

    let elementoTr=document.createElement("tr");
    elementoTabla.appendChild(elementoTr);

    let elementoTh1=document.createElement("th");
    let textoTh1=document.createTextNode("Title");
    elementoTh1.appendChild(textoTh1);
    elementoTr.appendChild(elementoTh1);

    let elementoTh2=document.createElement("th");
    let textoTh2=document.createTextNode("Author");
    elementoTh2.appendChild(textoTh2);
    elementoTr.appendChild(elementoTh2);

    let elementoTh3=document.createElement("th");
    let textoTh3=document.createTextNode("Genre");
    elementoTh3.appendChild(textoTh3);
    elementoTr.appendChild(elementoTh3);

    let elementoTh4=document.createElement("th");
    let textoTh4=document.createTextNode("Read");
    elementoTh4.appendChild(textoTh4);
    elementoTr.appendChild(elementoTh4);

    let elementoTh5=document.createElement("th");
    let textoTh5=document.createTextNode("Read date");
    elementoTh5.appendChild(textoTh5);
    elementoTr.appendChild(elementoTh5);

    let elementoTh6=document.createElement("th");
    let textoTh6=document.createTextNode("Edit/Delete");
    elementoTh6.appendChild(textoTh6);
    elementoTr.appendChild(elementoTh6);
}

function anadirLibro(){
    let title=document.getElementById("nameBook").value;
    let author=document.getElementById("author").value;
    let genre=document.getElementById("genre").value;
    lista.add(new Book(title,author,genre));

    limpiar();
    tabla();
}
function limpiar(){
    document.getElementById("nameBook").value="";
    document.getElementById("author").value="";
    document.getElementById("genre").value="";
}

function tabla(){
    divTabla.textContent="";
    tablaVacia();
    for(let i=0; i<lista.listaLibros.length; i++){
        let elementoTrLibros=document.createElement("tr");
        elementoTrLibros.id=i;
        crearCelda(elementoTrLibros,lista.listaLibros[i].title);
        crearCelda(elementoTrLibros,lista.listaLibros[i].author);
        crearCelda(elementoTrLibros,lista.listaLibros[i].genre);
        crearCelda(elementoTrLibros,lista.listaLibros[i].read);
        crearCelda(elementoTrLibros,lista.listaLibros[i].readDate);
        crearCeldaBotones(elementoTrLibros);

        let tabla=document.getElementById("tabla");
        tabla.appendChild(elementoTrLibros);
    }

    document.getElementById("librosLeidos").textContent="Libros leidos: "+lista.numberRead;
    document.getElementById("librosNoLeidos").textContent="Libros no leidos: "+lista.numberNoRead;
}

function crearCeldaBotones(tr){
    let botonEditar=document.createElement("button");
    let contenidoEditar=document.createTextNode("Actualizar");
    botonEditar.appendChild(contenidoEditar);

    let botonBorrar=document.createElement("button");
    let contenidoBorrar=document.createTextNode("Borrar");
    botonBorrar.appendChild(contenidoBorrar);

    botonEditar.id="botonEditar";
    botonBorrar.id="botonBorrar";

    let numero=tr.getAttribute("id");
    //Evento borrar
    botonBorrar.addEventListener("click",()=>{
        tr.remove();
        lista.listaLibros.splice(numero,1);
        document.getElementById("librosLeidos").textContent="Libros leidos: "+lista.numberRead;
        document.getElementById("librosNoLeidos").textContent="Libros no leidos: "+lista.numberNoRead;
    });

    //Evento editar
    botonEditar.addEventListener("click",()=>{
        lista.listaLibros[numero].title=document.getElementById(numero).getElementsByTagName("td")[0].querySelector("input").value;
        lista.listaLibros[numero].author=document.getElementById(numero).getElementsByTagName("td")[1].querySelector("input").value;
        lista.listaLibros[numero].genre=document.getElementById(numero).getElementsByTagName("td")[2].querySelector("input").value;
        lista.listaLibros[numero].read=document.getElementById(numero).getElementsByTagName("td")[3].querySelector("input").value;
        lista.listaLibros[numero].readDate=document.getElementById(numero).getElementsByTagName("td")[4].querySelector("input").value;

        tabla();
    })

///////////////////////
    let td=document.createElement("td");
    td.appendChild(botonEditar);
    td.appendChild(botonBorrar);
    tr.appendChild(td);
}

function crearCelda(tr,contenido){
    let td=document.createElement("td");
    let inputTd=document.createElement("input");
    inputTd.type="text";
    inputTd.value=contenido;
    td.appendChild(inputTd);
    tr.appendChild(td);
}

function crearBoton(){
    let botonLeido=document.createElement("button");
    let contenidoBoton=document.createTextNode("Leido");
    botonLeido.appendChild(contenidoBoton);
    botonLeido.id="botonLeido";
    document.getElementById("botonDiv").appendChild(botonLeido);

    botonLeido.addEventListener("click",cambiarRead);
}

function cambiarRead(){
    lista.currentBookRead;
    lista.finishCurrentBook();
    tabla();
}
