<template>
<!-- esta es la vista de la nota. Los datos que se pasan se nombran en props, y aqui solo se maqueta, poniendo esos
datos entre {{}}

Para pasar cosas hacia fuera se hace mediante eventos
this.$emit("nombreEvento") dentro de la funcion cuyo resultado queremos exportar. Se le pueden pasar parametros
En app, v-on:nombreEvento que hemos puesto aqui-->
  <section class="notasimple">
    <p v-on:click="cambioEstado"
       v-bind:class="{completado: nota.completado}"
       v-if="!isDisabled">
       Titulo: {{nota.titulo}} Completado: {{nota.completado}}</p>
       
      <input v-on:keyup.enter="cambiarNombreNota" v-model ="nota.titulo" v-if ="isDisabled">
      <button v-on:click = "cambiarEstadoEditar" :disabled="isDisabled">Editar</button>
      <button v-on:click="borrarNota">Borrar</button>
  </section>

</template>

<script lang="js">
/* import { db } from '../db.js' */

  export default  {
    name: 'notasimple',
    props: ['nota'],
    mounted () {

    },
    data () {
      return {
        isDisabled :false
      }
    },
    methods: {
      cambioEstado:function(){
        this.nota.completado=!this.nota.completado;
        this.$emit("cambioEnEstado");
      },
      borrarNota(){
        this.$emit("borrarNota",this.nota.id)
      },
      cambiarEstadoEditar(){
        this.isDisabled = !this.isDisabled;
      },
      cambiarNombreNota(){
        this.$emit("editarNota",this.nota.id,this.nota.titulo);
        this.cambiarEstadoEditar();
      }
    },
    computed: {

    },
    firestore:{ 
     /*  listaNotas: db.collection('notas') */
    }
}


</script>

<style scoped lang="css">
  .notasimple p{
    cursor:pointer;
  }
  .completado{
    font-weight:bold;
    color:green;
  }
  .notasimple{
    border:1px solid black;
    width:20%;
    background-color:#fce6c0;
  }
</style>
