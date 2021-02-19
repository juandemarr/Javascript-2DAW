<template>

  <section class="contenido">
    <div class="inputs">
      <label>Introduce el titulo: </label>
      <input v-model="nuevoRecordatorio" 
             v-on:keydown.enter="anadirRecordatorio"><br>
      <span>Filtrar tareas:</span><input v-model="empiezaPor">
    </div>
    <p>{{totalPendientes}} tareas pendientes de un total de: {{totalTareas}}</p>
    <p v-on:click="borrarTareasCompletadas">Borrar tareas completadas</p>
    <br><br>
    <notasimple 
      v-for="nota in listaRecordatoriosFiltrada"
      v-bind:key="nota.fecha"
      v-bind:nota="nota"
      v-on:borrarNota="borrarNotaLista"
      v-on:editarNota="cambiarNombre">
    </notasimple>
    <!--el v-on de nombre borrarNota es el que le pasamos
     con $emit en notaSimple. Se une con un metodo de esta pagina-->
    
  </section>

</template>

<script lang="js">
  import notasimple from './notaSimple.vue'
  import { db } from '../db.js'

  export default  {
    name: 'contenido',
    components: {
      notasimple,
    },
    props: [],
    mounted () {

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
        db.collection('notas').add({
          titulo:this.nuevoRecordatorio,
          prioridad:0,
          fechaCreacion:new Date(),
          completado:false
        });
      this.nuevoRecordatorio="";
      
      },
      borrarTareasCompletadas:function(){
        this.listaRecordatorios=this.listaRecordatorios.filter(nota=>{
          return !nota.completado;
        })
      
      },
      borrarNotaLista : function(id){
        db.collection('notas')
          .doc(id)
          .delete()
      },
      cambiarNombre: function(id,tituloNotaEditada){
        db.collection('notas')
          .doc(id)
          .update({titulo:tituloNotaEditada})
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
    },
    firestore:{
      listaRecordatorios:db.collection('notas')
    }
}

</script>

<style>
  .contenido {

  }
  input{
    margin-left:10px;
  }
</style>
