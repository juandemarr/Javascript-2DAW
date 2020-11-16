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

    ///////MÉTODOS

    add(book){
        this.listaLibros.push(book);
    }

    finishCurrentBook(){
        this.listaLibros[this.currentBookIndex].read=true;
        this.listaLibros[this.currentBookIndex].readDate=new Date(Date.now()).toLocaleString();
        this.lastBookRead=this.listaLibros[this.currentBookIndex];
        if(this.currentBookIndex<this.listaLibros.length-1)
            this.currentBookIndex++;
    }
    //Date.now() devuelve los milisegundos desde el "inicio", pero pasado como parámetro
    //a la creación del objeto Date, devuelve la fecha entera

}


export {Book,Booklist};