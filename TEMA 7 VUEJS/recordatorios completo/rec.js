var app = new Vue({
    el: '#miAplicacion',
    data:{
        nuevoRecordatorio:'',
        listaRecordatorios:[],
        isButtonDisabled:true,
        empiezaPor:""
    },
    mounted(){
        if(localStorage.listaTareas)
            this.listaRecordatorios=JSON.parse(localStorage.listaTareas);
    },/*evento del objeto, salta cuando se incrusta la aplicacion vue en el html, despues de crearse y antes de unirse al html
    hay mas eventos del ciclo de vida de la app de vue*/
    methods:{
        anadirRecordatorio:function(){
            this.listaRecordatorios.push({/*para meter un objeto JSON en lugar de solo un valor*/
                titulo:this.nuevoRecordatorio,
                prioridad:0,/*0,1,2 mas alta*/
                fechaCreacion:new Date(),
                completado:false
            });
            this.nuevoRecordatorio="";
            this.actualizarLocalStorage();

        },
        cambiarEstadoTarea:function(posicion){
            this.listaRecordatorios[posicion].completado=!this.listaRecordatorios[posicion].completado;
            /*FALLO: NO RECONOCE COMPLETADO?? AL PULSAR EL BOTON BORRAR DE CADA NOTA*/
            this.actualizarLocalStorage();
        },
        borrarTareasCompletadas:function(){
            this.listaRecordatorios=this.listaRecordatorios.filter(nota=>{
                return !nota.completado;
                /*al final del filter siempre hay que hacer un return, true o false 
                para que lo deje o quite respectivamente. Como devuelve un nuevo array, hay que asignarlo 
                a una variable al principio*/
            })
            /* for(let i=0; i<this.listaRecordatorios.length; i++)
                if(this.listaRecordatorios[i].completado)
                    this.listaRecordatorios.splice(i,1); */
            this.actualizarLocalStorage();
        },
        actualizarLocalStorage:function(){
            localStorage.listaTareas = JSON.stringify(this.listaRecordatorios);
        },
        borrarRecordatorio:function(indice){
            this.listaRecordatorios.splice(indice,1);
        },
        cambiarBoton:function(){
            if(this.nuevoRecordatorio.length>0)
                this.isButtonDisabled=false;
            else
                this.isButtonDisabled=true;
        }
    },
    computed:{/*para que actualice sobre la marcha la longitud del array,
        la obtenemos como campo calculado. Inicializamos la variable del html a una funcion
        Tambien para calcular valores, se hace dentro de funciones aquí
        
        Todos los calculados tienen que tener un return*/
        totalTareas:function(){
            return this.listaRecordatorios.length;
        },
        totalPendientes:function(){
            let total=0;
            for(let i=0; i<this.listaRecordatorios.length; i++)
                if(this.listaRecordatorios[i].completado==false)
                    total++;
            
            return total;
        },
        listaRecordatoriosFiltrada:function(){
            let listaFiltrada;

            if(this.empiezaPor=="")
                listaFiltrada = this.listaRecordatorios;
            else
                listaFiltrada= this.listaRecordatorios.filter((recordatorio)=>{
                    if(recordatorio.titulo.indexOf(this.empiezaPor)>=0)/*para que sea solo que comience ==0*/
                    /*indexOf(valor) que contenga el string ese carácter o palabra*/
                        return true;
                    else 
                        return false;
            });
            /*para ordenar array.sort() devuelve num positivo (1) si a es mayor que b
                                        numero negativo (-1) si a es menor que b
                                        0 si a y b son iguales
            también ordena alfabéticamente
            No modifica, devuelve un array nuevo ordenado, por eso lo sobreescribimos*/
            listaFiltrada=listaFiltrada.sort((nota1, nota2)=>{/*nota1 y nota2 son dos elementos del array*/
                if(nota1.prioridad < nota2.prioridad){
                    return -1;
                }
                if (nota1.prioridad > nota2.prioridad){
                    return 1;
                }
                //si es igual
                return 0;
            })/*se puede llevar esto  auna funcion, y pasarle el campo por el que quieras ordenarle por parametro.
            Se obtiene por lista o checkbox por ejemplo*/

            return listaFiltrada;
        }
    }


})