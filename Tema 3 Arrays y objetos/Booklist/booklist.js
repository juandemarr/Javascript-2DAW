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

window.onload=main;

function main(){
    lista=new Booklist();

    let botonLibro=document.getElementById("addBook");
    botonLibro.addEventListener("click",anadirLibro);
}

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
    }
    
    ////////////MIEMBROS CALCULADOS, con get. Se llaman como atributos, sin parentesis.
    // No hay getter como en java

    get numberRead(){
        let cont=0;
        for(let i=0; i<this.listaLibros.length; i++){
            if(this.listaLibros[i].read==true)
                cont++;
        }
        return cont;
    }
    /*//Otra forma
    get booksRead(){
        return this.listaLibros.filter( (book) => book.read).length;
    }
    /* El filter() evalua lo que le pongas como una condición. Si es true lo deja en 
    el array que devuelve
    .length devuelve el número de elementos del array que filter ha generado
    */

    get numberNoRead(){
        return this.listaLibros.length-this.numberRead;
    }
    //Otra forma
    /*get booksNoRead(){
        return this.listaLibros.filter((book) => !book.read).length;
    }*/

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

    get lastBookRead(){
        if(this.currentBookIndex==0)
            return null;
        else
            return this.listaLibros[this.currentBookIndex-1];
    }

    ///////MÉTODOS

    add(book){
        this.listaLibros.push(book);
    }

    finishCurrentBook(){
        this.listaLibros[this.currentBookIndex].read=true;
        this.listaLibros[this.currentBookIndex].readDate=new Date(Date.now());
        this.lastBookRead=this.listaLibros[this.currentBookIndex];
        if(this.currentBookIndex<this.listaLibros.length-1)
            this.currentBookIndex++;
    }
    //Date.now() devuelve los milisegundos desde el "inicio", pero pasado como parámetro
    //a la creación del objeto Date, devuelve la fecha entera

}

/*MÉTODOS DE LA INTERFAZ*/

function anadirLibro(){
    let title=document.getElementById("nameBook").value;
    let author=document.getElementById("author").value;
    let genre=document.getElementById("genre").value;
    lista.add(new Book(title,author,genre));

    limpiar();
    tabla();

    let botonLeido=document.getElementById("botonLeido");
    botonLeido.addEventListener("click",lista.finishCurrentBook);
}
function limpiar(){
    document.getElementById("nameBook").value="";
    document.getElementById("author").value="";
    document.getElementById("genre").value="";
}

function tabla(){
    let tabla="<table><tr><th>Title</th><th>Author</th><th>Genre</th><th>Finalizado</th><th>Fecha Lectura</th></tr>";
    lista.listaLibros.forEach(libro => {
        tabla+="<tr><td>"+libro.title+"</td><td>"+libro.author+"</td><td>"+libro.genre+
        "</td><td>"+libro.read+"</td><td>"+libro.readDate+"</td></tr>";
    });
    tabla+="</table>";
    let boton="<div id=\"botonDiv\"><button id=\"botonLeido\">Leido</button></div>";
    document.getElementById("table").innerHTML=tabla+boton;

}
