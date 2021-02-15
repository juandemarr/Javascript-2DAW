import Vue from 'vue'
import App from './App.vue'

/*Firebase*/
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin);
/*****/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
