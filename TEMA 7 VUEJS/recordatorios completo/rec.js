var app = new Vue({
    el: '#miAplicacion',
    data:{
        nuevoRecordatorio:'',
        listaRecordatorios:[],
        isButtonDisabled:true
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
                prioridad:0,
                fechaCreacion:new Date(),
                completado:false
            });
            this.nuevoRecordatorio="";
            this.actualizarLocalStorage();

        },
        cambiarEstadoTarea:function(posicion){
            /*this.listaRecordatorios.splice(posicion,1); para borrar*/
            this.listaRecordatorios[posicion].completado=!this.listaRecordatorios[posicion].completado;
            /*FALLO: NO RECONOCE COMPLETADO?? AL PULSAR EL BOTON BORRAR DE CADA NOTA*/
            this.actualizarLocalStorage();
        },
        borrarTareasCompletadas:function(){
            this.listaRecordatorios=this.listaRecordatorios.filter(nota=>{
                return !nota.completado;
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