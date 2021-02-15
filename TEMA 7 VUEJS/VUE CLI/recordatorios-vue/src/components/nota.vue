<template lang="html">

  <section class="nota">
    <p v-on:click="cambiarEstadoTarea(index)"
       v-bind:class="{completadoClase: recordatorio.completado}">
      Titulo: {{recordatorio.titulo}} 
      <br>Prioridad: {{recordatorio.prioridad}}
      <br>Completado: {{recordatorio.completado}}
    </p>
  </section>

</template>

<script lang="js">
/*NO SE USA*/
  export default  {
    name: 'nota',
    props: ['recordatorio','titulo','prioridad','completado'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .nota {

  }
</style>
