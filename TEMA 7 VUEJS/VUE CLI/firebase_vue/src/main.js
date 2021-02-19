import Vue from 'vue'
import App from './App.vue'

/*Firebase*/
import { firestorePlugin } from 'vuefire'//tbn tienen que ir entre llaves
Vue.use(firestorePlugin);

import Notifications from 'vue-notification'
Vue.use(Notifications)
/*****/

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
