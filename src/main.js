import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import router from './router'
import store from './store'
import moment from 'moment'
import ApiRandomUser from './ApiRandomUser.js'
import axios from 'axios';
import VueBlobJsonCsv from 'vue-blob-json-csv';
import vuetify from './plugins/vuetify';
const HTTP = axios.create({
    baseURL: 'https://randomuser.me/api'
})


const shared = {
  usuarios: ApiRandomUser.getUsers,
 
}

Vue.config.productionTip = false
Vue.config.productionTip = false
Vue.prototype.$UsuariosGlobal =  HTTP.get('/?results=100&seed=seed').then(res => res.data.results);
Vue.use(VueBlobJsonCsv)

//Vue.component('my-component-name', { Helloworld,
//carduser
//})


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(value).format('MM/DD/YYYY ')
  }
});
new Vue({
  data:{
    shared
},

  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
