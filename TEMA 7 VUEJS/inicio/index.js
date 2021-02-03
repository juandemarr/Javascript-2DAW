/* window.onload=()=>{ */

var app = new Vue({     /*defino una aplcacion vue. Puede haber mas de una por pagina*/
    el: '#app',         /*cojo el elemento de html por id*/
    data: {             /*donde defino las variables*/
        /* message: 'You loaded this page on ' + new Date().toLocaleString() */
        message:'reverse message',
        nombreUsuario: 'JUANDE',
        seen:true,/*se puede poner 0 (falso) o numero de articulos, saldria el boton*/

        todos: [/*array JSON. También puede ser un array normal*/
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
          ],
        todos2:["hello","there"]

    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('');
        },
        borrarElemento:function(){
            this.todos2.pop();  /*this porque este vue es un objeto, sin this lo tomara como una variable local dentro del metodo*/
        },
        anadirElemento:function(){
            this.todos2.push(this.message);
        }
    }
})





/* 
} */