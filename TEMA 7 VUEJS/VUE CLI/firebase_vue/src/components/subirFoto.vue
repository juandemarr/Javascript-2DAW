<template lang="html">

  <section class="subir-foto">
    <h1>subir-foto Component</h1>

    <input type="file" ref="input1"
    @change="previewImage" accept="image/*"><!--esto filtra los archivos que se suben-->
    <input type="button" @click="subir" value="Subir">

  <div v-if="imageData!=null">
    <img class="preview" height="268" width="356" :src="img1"><!-- los dos puntos equivalen a v-bind (creando una variable)-->

  </div>
  </section>

</template>

<script lang="js">
import {storage} from '../db.js'

  export default  {
    name: 'subirfoto',
    props: [],
    mounted () {

    },
    data () {
      return {
        imagedata:null,
        img1:null
      }
    },
    methods: {
      click1:function(){
      
      },
      previewImage:function(event){
        this.uploadValue=0;
        this.imageData=event.targete.files[0];/*solo esto y l alinea del put es necesaria*/
        
        var reader=new FileReader();/*para que se previsualice la imagen*/

        reader.onload = (e) => {
          this.img1 = e.target.result;
        }
        reader.readAsDataURL(this.imageData);
      },

      subir:function(){
        const storageRef=storage.ref(this.imageData.name).put(this.imageData);
        console.log(storageRef)
        
        storageRef.on('state_changed',snapshot=>{
          this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        },error=> {console.log(error.message)},/*este this.uploadValue es numero de 0 a 100 con el progreso de la subida, que se puede maquetar en una barra de progreso u otro*/
        ()=>{this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
            console.log(url)/*esta es la url de la imagen*/
            this.img1=null;
            this.imageData=null;
            this.$notify({
              group:"foo",
              title:"Subida OK",
              type:"success",
              text:"El archivo se ha subido correctamente"
            });
          });
        }
      );
      }
    },
    computed: {

    }
  }

</script>

<style>
  .subir-foto {

  }
</style>
