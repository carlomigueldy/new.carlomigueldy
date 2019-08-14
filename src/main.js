import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


Vue.config.productionTip = false

library.add(fab)

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({mode:'history', routes})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
