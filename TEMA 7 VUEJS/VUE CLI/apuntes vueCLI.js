/*
Primero descargar node de nodejs.org
Para instalar vue cli: npm install -g @vue/cli
npm install -g @calidae/vue-generate-component
mejor este: npm install -g vue-generate-component
vue create lista-notas (no admite mayusculas)       //crear proyecto
    vgc -s Footer --style=css (sin sass) en cmd     //crear componente
(-g significa global ,para toda la máquina)
npm install --save axios vue-axios para ajax
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    Vue.use(VueAxios, axios)    en main,js
npm install bootstrap bootstrap-vue  (componente bootstrap)
npm install bootstrap jquery popper.js  (no componente bootstrap)
//Todo esto en main.js
    import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
    // Import Bootstrap an BootstrapVue CSS files (order is important)
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    // Make BootstrapVue available throughout your project
    Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
    Vue.use(IconsPlugin)

    //para animaciones.
    import "bootstrap";
    import "bootstrap/dist/css/bootstrap.min.css";

    //se usan todos

/////////////////////////////////////////////
Para crear un proyecto: vue create lista-notas (no admite mayusculas)
seleccionamos default (vue 2 babel, eslint)
para subir a github, el package.json es de los mas importantes. Dentro:
scripts => comandos que puedo ejecutar escribiendo npm run comando

Dentro de la carpeta del proyecto
    npm run serve => levanta el servidor. Accedemos en el navegador con localhost/8080
    El codigo se cambia en la carpeta componets, helloworld. Guardas y se ven los cambios
para parar el servidor ctrl+c
    npm run build //para generar el proyecto en produccion. Crea la carpeta dist, con el codigo minificado
    el archivo .map ayuda a ver el codigo bien formateado

el index.html no se toca
el main.js tampoco. Para crear codigo, dentro de la carpeta src
En la carpeta assets se colocan las imagenes, css
Dentro de components, el archivo tendra template (la parte visual), script (la parte de codigo) y style (si queremos añadirle un estilo especifico)

se lanza el index.html por servidor de chrome
//////////////////////////////////////////////
Para crear un componente, a mano o con herramienta
Manualmente: crear el archivo, en export ponerle el nombre del archivo, 
luego importarlo en app.vue, usar el componente en template, y mencionarlo en los componets de export
/////////Da igual el orden en el que se pongan los import


IMPORTAR EN MAIN.JS
Mejor importar en main.js para que esten accesibles a todas las paginas los componentes
import HelloWorld from './components/HelloWorld.vue'
Vue.component(HelloWorld);



Para crear un componete automáticamente, en cmd colocarse dentro de la carpeta components y escribir
vgc Footer
crearñá una carpeta, para que lo haga sin carpeta y solo el archivo
vgc -s Footer

Crea el componente pero no lo importa en app.vue, repetir los pasos de:
importarlo, nombrarlo en export y usarlo en template
Quitar de style lang="scss"
Para generarlo sin esto: vgc -s cabecera --style=css

//////////////////////////////////////

La consola de desarrolladores del navegador no se recarga sola en vue, hay que recargar pagina.

Para pasar elementos de app al objeto nota, dento de props, escribimos el nombre que nos hayamos inventado como atributo 
en el tag de app.vue Para pasar cosas del objeto nota a app, mediante eventos con this.$emit(). Lo recibo con v-on:nombreEvento=""

Se puede emitir un evento con parámetros
this.$emit("nombreEvento","valorEvento");
//////////////////////////////////////

Para peticiones ajax instalar vue-axios
si solo lo queremos para un proyecto, no hay que instalarlo global
para que funcione --save hace que se guarde en package.json del proyecto

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios) esto permite que lo use desde cualquier parte de mi aplicación
en main.js


VUE ROUTER
En la carpeta del proyecto: npm install --save vue-router

Hacerlo en main.js

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]const router = new VueRouter({
  routes // short for `routes: routes`
})
new Vue({
  render: h => h(App),
  router //añadir esto
}).$mount('#app')

en app.vue pongo <router-view></router-view> para que en ese espacio se ssuituya por el componente que se indique en la url

para verlo poner ip en el navegador en lugar de localhost

en lugar de <a usar router-link para que no haga recarga
<router-link to="/foo">Go to Foo</router-link>
las animaciones se ponen englobando el router-view, en app.vue
*/


/*Para subirlo, una vez hecho npm run build, con ruta relativa y no absoluta por defecto (solo se podria añadir a www.midomio.com no a subcarpetas)
creamos vue.config.js en la raiz de nuestro proyecto y ponemos
module.export={
  publicPath:''
}
*//*Filtro son globales. No tenemos this*/

/*FIREBASE
Crear proyecto, no poner id, ni analitics, usar cloud storage, modo prueba (mas relajado), servidores de europa-west
en el proyecto, npm install --save firebase vuefire
crear en raiz del proyecto db.js CONTENIDO
  copiado el db.js de vuefire getting started, y var config de los ajustes del proyecto en firebase
hacemos el import en e lcomponente que lo vamos a usar
import db  from '../db.js'; (si esta dentro de la carpeta componets hay que salir en la ruta)
y lo usamos en el componente. Creamos un array vacio en data y en firestore:{
  le asignamos el valor de db.collection('nombreCollectFirestore);
}
añadir en main.js el import y vue.use de firestore

para ordenar los datos, en el componente:
firestore:{
    datos:db.collection('documentos').orderBy('nombreDoc')
  }

Para filtar:
this.$bind(
  'documents',
  db
    .collection('documents')
    .where('wordCount', '>', 200)
    .orderBy('wordCount')
)




Para logearse con facebook:
facebook developers, iniciar sesion, mis apps, crear app, crear experiencias compartidas
poner nombre app
inicio de sesion de facebook, web, poner url del hosting creado del proyeecto de firebase. Todo a siguiente
poner el id de la palicacion
En conf basica de la app, copiar la clave secreta de la app y ponerla en firebase para activar el login



STORAGE
en db.js
export const storage = firebase.storage()
ver subirfoto de firebase-vue



NOTIFICACIONES
npm install --save vue-notification
en main.js import Notifications from 'vue-notification'
Vue.use(Notifications)
en app.vue <notifications group="foo"/>   no se ve pero hay que ponerlo



USANDO SASS
npm install -D sass-loader sass
en <style lang="scss">
</style>
*/
