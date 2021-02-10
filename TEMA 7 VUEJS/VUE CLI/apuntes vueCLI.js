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

Para pasar elementos de app al objeto nota, dento de props, escribimos el nombre que nos hayamos inventado como atributo en el tag de app.vue 
Para pasar cosas del objeto nota a app, mediante eventos con this.$emit(). Lo recibo con v-on:nombreEvento=""

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

*/