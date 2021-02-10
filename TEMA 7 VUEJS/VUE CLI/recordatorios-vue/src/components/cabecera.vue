<template lang="html">

  <section class="cabecera">
    <h1>cabecera Component</h1>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'cabecera',
    props: [],
    mounted () {
      let api="https://api.mocki.io/v1/b043df5a"
        this.axios.get(api).then((response) => {
          console.log(response);    /*igual que en vue "normal"*/
        })
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
