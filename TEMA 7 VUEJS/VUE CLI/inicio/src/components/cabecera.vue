<template lang="html">

  <section class="cabecera-2">
    <h1>cabecera Component</h1>
    <p>{{ejemplo}}</p>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'cabecera',
    props: ["ejemplo"],/*poner nombre de la propiedad que va a funcionar como un 
    atributo de ese componente, al que le pasaremos contenido desde afuera.
    Lo usamos arriba sin mas entre {{}}
    Le pasamos el en app.vue siendo un atributo del tag = valor que le pasamos*/
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
  .cabecera {

  }
</style>
