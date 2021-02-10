<template>
  <div id="app">
    <cabecera></cabecera>
    <!--probando bootstrap-->
    <!-- <b-alert show>Default Alert</b-alert> -->
    <!-- <b-button variant="danger">Button</b-button> -->
    <!---->
    <div class="inputs">
      <input v-model="nuevoRecordatorio" v-on:keydown.enter="anadirRecordatorio"><br>
      <span>Filtrar tareas:</span><input v-model="empiezaPor">
    </div>
    <p>{{totalPendientes}} tareas pendientes de un total de: {{totalTareas}}</p>
    <p v-on:click="borrarTareasCompletadas">Borrar tareas completadas</p>
    <br><br>
    <notasimple 
      v-for="nota in listaRecordatoriosFiltrada"
      v-bind:key="nota.titulo"
      v-bind:nota="nota"
      v-on:cambioEnEstado="actualizarLocalStorage"
      v-on:nuevoEvento="trataNuevoEvento"><!--escribimos el nombre que le pusimos en $emit-->
    
    </notasimple>
    <!-- <notasimple
      datoNota="nota">paso de contenido estatico
    
    </notasimple>-->
    <!--////////////////////////////////////-->
    <!-- <notasimple 
      v-for="nota in listaRecordatoriosFiltrada"
      v-bind:key="nota.titulo"
      v-bind:titulo="nota.titulo"
      v-bind:completado="nota.completado">paso de contenido dinamico. Se pueen pasar todos los campos como atributos v-bind,
          o pasar solo el objeto nota y en la vista obtengo los dsintos campos
    
    </notasimple> -->
    <contenido></contenido>
    <pie></pie>
  </div>
</template>

<script>
import cabecera from './components/cabecera.vue'
import contenido from './components/contenido.vue'
import notasimple from './components/notaSimple.vue'
import pie from './components/pie.vue'
export default {
  name: 'App',
  components: {
    cabecera,
    contenido,
    notasimple,
    pie
  },
  mounted(){
    if(localStorage.listaTareas)
      this.listaRecordatorios=JSON.parse(localStorage.listaTareas);
  },
  data () {
    return {
      listaRecordatorios:[],
      nuevoRecordatorio:'',
      empiezaPor:"",
    }
  },
  methods: {
    anadirRecordatorio:function(){
      this.listaRecordatorios.push({
        titulo:this.nuevoRecordatorio,
        prioridad:0,
        fechaCreacion:new Date(),
        completado:false
      });
      this.nuevoRecordatorio="";
      this.actualizarLocalStorage();
    },
    /* cambiarEstadoTarea:function(posicion){
      this.listaRecordatorios[posicion].completado=!this.listaRecordatorios[posicion].completado;
      this.actualizarLocalStorage();
    }, */
    borrarTareasCompletadas:function(){
      this.listaRecordatorios=this.listaRecordatorios.filter(nota=>{
        return !nota.completado;
      })
      this.actualizarLocalStorage();
    },
    actualizarLocalStorage:function(){
      localStorage.listaTareas = JSON.stringify(this.listaRecordatorios);
    },
    trataNuevoEvento:function(mensaje){
      alert(mensaje);
    }

  },
  computed: {
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
          if(recordatorio.titulo.indexOf(this.empiezaPor)>=0)
                    /*indexOf(valor) que contenga el string ese carácter o palabra*/
            return true;
          else 
            return false;
        });


      listaFiltrada=listaFiltrada.sort((nota1, nota2)=>{
          /*num positivo (1) si a es mayor que b
          numero negativo (-1) si a es menor que b
          0 si a y b son iguales*/
        if(nota1.prioridad < nota2.prioridad){
          return -1;
        }
        if (nota1.prioridad > nota2.prioridad){
          return 1;
        }
        //si es igual
          return 0;
      })

      return listaFiltrada;
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
  *{
    box-sizing:border-box;
    margin:0;
  }
  body{
    font-family:sans-serif;
    padding:2%;
    line-height:25px;
  }
  .completadoClase{
    font-weight:bold;
    color:green;
  }
</style>
