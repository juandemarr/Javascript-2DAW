var app = new Vue({
    el: '#miAplicacion',
    data:{
        nuevoRecordatorio:'',
        listaRecordatorios:[],

    },
    methods:{
        anadirRecordatorio:function(){
            this.listaRecordatorios.push({/*para meter un objeto JSON en lugar de solo un valor*/
                titulo:this.nuevoRecordatorio,
                prioridad:0,
                fechaCreacion:new Date(),
                completado:false
            });
            this.nuevoRecordatorio="";
        },
        cambiarEstadoTarea:function(posicion){
            /*this.listaRecordatorios.splice(posicion,1); para borrar*/
            this.listaRecordatorios[posicion].completado=!this.listaRecordatorios[posicion].completado;
        }
    },
    computed:{/*para que actualice sobre la marcha la longitud del array,
        la obtenemos como campo calculado. Inicializamos la variable del html a una funcion
        Tambien para calcular valores, se hace dentro de funciones aquí*/
        totalTareas:function(){
            return this.listaRecordatorios.length;
        },
        totalPendientes:function(){
            let total=0;
            for(let i=0; i<this.listaRecordatorios.length; i++)
                if(this.listaRecordatorios[i].completado==false)
                    total++;
            
            return total;
        }
    }


})