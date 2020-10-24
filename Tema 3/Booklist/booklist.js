/*Create a class BookList

* Create another class called Book

* BookLists should have the following properties:
    Number of books marked as read
    Number of books marked not read yet
    A reference to the next book to read (book object)
    A reference to the current book being read (book object)
    A reference to the last book read (book object)
    An array of all the Books
* Each Book should have several properties:
    Title
    Genre
    Author
    Read (true or false)
    Read date, can be blank, otherwise needs to be a JS Date() object
* Every Booklist should have a few methods:

.add(book)
    should add a book to the books list.
.finishCurrentBook()
    should mark the book that is currently being read as "read"
Give it a read date of new Date(Date.now())
Change the last book read to be the book that just got finished
Change the current book to be the next book to be read
Change the next book to be read property to be the first unread book you find in the list of books
* Booklists and Books might need more methods than that. Try to think of more that might be useful.*/

class Book{
    constructor(title,genre,author){
        this.title=title;
        this.genre=genre;
        this.author=author;
        read=null;
        readDate=null;
    }
    leido(){
        read=true;
        readDate=Date.now().toLocaleString();
    }

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
    set read(read){
        this.read=read;
    }
    set readDate(readDate){
        this.readDate=readDate;
    }

}

class Booklist{
    constructor(){
        lista=[];

    }

    add(title,genre,author){
        lista.push(new Book(title,genre,author));
    }

    numberRead(){
        let cont=0;
        for(let i=0; i<lista.length; i++){
            if(lista[i].read==true)
                cont++;
        }
        return cont;
    }

    numberNoRead(){
        let cont=0;
        for(let i=0; i<lista.length; i++){
            if(lista[i].read==false)
                cont++;
        }
        return cont;
    }

    nextBookRead(){
        let bool=false;
        for(let i=0; i<lista.length; i++){
            if(bool==false)
                if(lista[i].read==true)
                    bool=true;
        }
        return lista[i];
    }



    finishCurrentBook(){

    }

}

Booklist.add("hola","genero","autor");
document.write();
