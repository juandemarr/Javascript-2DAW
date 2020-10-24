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

class Book{
    constructor(title,genre,author){
        this.title=title;
        this.genre=genre;
        this.author=author;
        this.read=null;
        this.readDate=null;
    }
    /*get leido(){
        this.read=true;
        this.readDate=Date.now().toLocaleString();
    }*/

    get title(){
        return this.title;
    }
    get genre(){
        return this.genre;
    }
    get author(){
        return this.author;
    }
    get read(){
        return this.read;
    }
    get readDate(){
        return this.readDate;
    }
    set title(title){
        this.title=title;
    }
    set genre(genre){
        this.genre=genre;
    }
    set author(author){
        this.author=author;
    }

}

class Booklist{
    constructor(){
        this.listaLibros=[];

    }
    
    ///////////Miembros calculados

    get numberRead(){
        let cont=0;
        for(let i=0; i<this.listaLibros.length; i++){
            if(this.listaLibros[i].read==true)
                cont++;
        }
        return cont;
    }

    get numberNoRead(){
        return this.listaLibros.length-this.numberNoRead;
    }

    get nextBookRead(){
        let bool=true;
        let siguiente=null;
        for(let i=0; i<this.listaLibros.length; i++){
            if(bool && this.listaLibros[i].read==false)
                siguiente=this.listaLibros[i];
                bool=false;
        }
        return siguiente;
    }

    get currentBookRead(){
        let current=null;
        for(let i=0; i<this.listaLibros.length; i++){
            if(this.listaLibros[i].read==true && this.listaLibros[i].readDate==null)
                current=this.listaLibros[i];
        }
        return current;
    }

    get lastBookRead(){
        let lastBook=null;
        let bool=true;
        for(let i=this.listaLibros.length-1; i>=0; i--){
            if(bool && this.listaLibros[i].read==true)
                lastBook=this.listaLibros[i];
                bool=false;
        }
        return lastBook;
    }

    get all(){
        return this.listaLibros;
    }

    /////////////////////////////Métodos

    add(title,genre,author){
        this.listaLibros.push(new Book(title,genre,author));
    }

    finishCurrentBook(){

    }
}