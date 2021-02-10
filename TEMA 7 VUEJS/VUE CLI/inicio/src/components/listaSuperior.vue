<template>
  <div class="hello">
    Este es el componente listaSuperior
  </div>
</template>

<script>
export default {
  name: 'listaSuperior',
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
