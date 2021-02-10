<template lang="html">
<!-- esta es la vista de la nota. Los datos que se pasan se nombran en props, y aqui solo se maqueta, poniendo esos
datos entre {{}}
le pasamos los valores en app.vue a esos datos, los cuales son atributos

se cambia el completado a nivel de objeto nota, pero fuera en app no se sabe.
Para pasar cosas hacia fuera se hace mediante eventos, y ya afuera en app se podrá guardar en localStorage
this.$emit("nombreEvento") dentro de la funcion cuyo resultado queremos exportar. En app, v-on:nombreEvento que hemos puesto aqui-->
  <section class="notasimple">
    <p v-on:click="cambioEstado"
       v-bind:class="{completado: nota.completado}">
       Titulo: {{nota.titulo}} Completado: {{nota.completado}}</p>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'notasimple',
    props: ['nota'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      cambioEstado:function(){
        this.nota.completado=!this.nota.completado;
        this.$emit("cambioEnEstado");
        this.$emit("nuevoEvento",this.nota.titulo);
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .notasimple p{
    cursor:pointer;
    width:25%;
    border:1px solid black;
  }
  .completado{
    font-weight:bold;
    color:green;
  }
</style>
