import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*VUE ROUTER*/
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HelloWorld from './components/HelloWorld.vue'
Vue.component(HelloWorld);
import Cabecera from './components/Cabecera.vue'
Vue.component(Cabecera);

const routes = [
  { path: '/', component: HelloWorld },/*por defecto*/
  { path: '/hello', component: HelloWorld },
  { path: '/cabecera', component: Cabecera }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
