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
    lista.listaLibros.forEach(libro => {
        let elementoTrLibros=document.createElement("tr");

        crearFila(elementoTrLibros,libro.title);
        crearFila(elementoTrLibros,libro.author);
        crearFila(elementoTrLibros,libro.genre);
        crearFila(elementoTrLibros,libro.read);
        crearFila(elementoTrLibros,libro.readDate);

        let tabla=document.getElementById("tabla");
        tabla.appendChild(elementoTrLibros);

    });
    document.getElementById("librosLeidos").textContent="Libros leidos: "+lista.numberRead;
    document.getElementById("librosNoLeidos").textContent="Libros no leidos: "+lista.numberNoRead;
}

function crearFila(tr,contenido){
    let td=document.createElement("td");
    let contenidoTd=document.createTextNode(contenido);
    td.appendChild(contenidoTd);
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
