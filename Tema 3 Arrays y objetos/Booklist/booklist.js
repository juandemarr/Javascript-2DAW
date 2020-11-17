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
import {Book,Booklist} from "./booklistClasses.js";


window.onload=main;
var lista;
function main(){
    lista=new Booklist();

    let botonLibro=document.getElementById("addBook");
    botonLibro.addEventListener("click",anadirLibro);
}

/*MÉTODOS DE LA INTERFAZ*/

function anadirLibro(){
    let title=document.getElementById("nameBook").value;
    let author=document.getElementById("author").value;
    let genre=document.getElementById("genre").value;
    lista.add(new Book(title,author,genre));

    limpiar();
    tabla();
    crearBoton();
}
function limpiar(){
    document.getElementById("nameBook").value="";
    document.getElementById("author").value="";
    document.getElementById("genre").value="";
}

function tabla(){
    let elementoTabla=document.createElement("table");
    elementoTabla.id="tabla";
    let elementoTr=document.createElement("tr");
    let elementoTh=document.createElement("th");
    let title=document.createTextNode("Title")
    let elementoTd=document.createElement("td");

    let tabla="<table id=\"tabla\"><tr><th>Title</th><th>Author</th><th>Genre</th><th>Finalizado</th><th>Fecha Lectura</th></tr>";
    lista.listaLibros.forEach(libro => {
        tabla+="<tr><td>"+libro.title+"</td><td>"+libro.author+"</td><td>"+libro.genre+
        "</td><td>"+libro.read+"</td><td>"+libro.readDate+"</td></tr>";
    });
    tabla+="</table>";
    
    document.getElementById("table").innerHTML=tabla;

    document.getElementById("librosLeidos").innerHTML="Libros leidos: "+lista.numberRead;
    document.getElementById("librosNoLeidos").innerHTML="Libros no leidos: "+lista.numberNoRead;
}

function crearBoton(){
    document.getElementById("botonDiv").innerHTML="<button id=\"botonLeido\">Leido</button>";
    let botonLeido=document.getElementById("botonLeido");
    botonLeido.addEventListener("click",cambiarRead);
}

function cambiarRead(){
    lista.currentBookRead;
    lista.finishCurrentBook();
    tabla();
}

