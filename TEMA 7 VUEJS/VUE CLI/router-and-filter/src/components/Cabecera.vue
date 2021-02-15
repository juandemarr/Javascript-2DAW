<template lang="html">

  <section class="cabecera">
    <h1>General Kenobi recibe {{$route.params.parametro}}</h1><!--$route es un objeto global-->
    <hr>
    <input v-model="idioma"/>
    <h2>Aplicando filtro idiomas: {{hola|nombreIdiomas(idioma,nombres)}}</h2>
    <!--version del filtro idiomas tomando por defecto un idioma-->
    <!--<h2>Aplicando filtro idiomas: {{nombres.espanol|nombreIdiomas(idioma,nombres)}}</h2>-->
    <hr>
    <input v-model="titulo"/>
    <h3>Aplicando filtro: {{titulo|capitalize}}</h3>
    <h3>Sin filtro: {{titulo}}</h3>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'cabecera',
    props: [],
    mounted () {

    },
    data () {
      return {
        hola:"Pedro",
        titulo:"titulo de cabecera",
        idioma:"en",
        nombres:{ingles:"Peter", espanol:"Pedro"}
      }
    },
    methods: {

    },
    computed: {

    },
    filters:{
      capitalize:function(valor){//este parametro valor es lo que hay a la izquierda en el filtro
        return valor[0].toUpperCase()+valor.slice(1); //esto seria solo con el parametro valor
      },

      /*se le pasaria por parametro nombres,el array del JSON con todos los datos*/
      nombreIdiomas:function(valor,idi,nombres){
        if(idi=="en")
          return nombres.ingles;//como hayamos llamado al campo ingles en el JSON
        else
          return nombres.espanol;
      }
      //version del filtro idiomas tomando por defecto un idioma y devolviendo solo el otro idioma
      /*,nombreIdiomas:function(valor,idi,nombres){
        if(idi=="en")
          return nombres.ingles
        else
          return valor;
      }*/
    }
}


</script>

<style scoped lang="css">
  .cabecera {

  }

</style>
