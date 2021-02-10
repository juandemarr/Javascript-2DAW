<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Este es un componente</h1>
    <h2 v-if="visible">{{variable}}</h2>
    <ol>
      <li v-for="dato in listaDatos" v-bind:key="dato">{{dato}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){//ahora data ha evolucionado a una funcion, con return dentro que devuelve un objeto JSON con los datos
    return{
      variable:"contenido de la variable",
      visible:false,
      listaDatos:[1,2,3]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
