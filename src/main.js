import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import router from './router'
import store from './store'
import moment from 'moment'
import ApiRandomUser from './ApiRandomUser.js'
import axios from 'axios';
import VueBlobJsonCsv from 'vue-blob-json-csv';
const HTTP = axios.create({
    baseURL: 'https://randomuser.me/api'
})


const shared = {
  usuarios: ApiRandomUser.getUsers,
 
}

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.prototype.$UsuariosGlobal =  HTTP.get('/?results=100&seed=seed').then(res => res.data.results);
Vue.use(VueBlobJsonCsv)

//Vue.component('my-component-name', { Helloworld,
  //carduser
//})


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY ')
  }
});
new Vue({
  data:{
    shared
},
  router,
  store,
  render: h => h(App)
}).$mount('#app')
