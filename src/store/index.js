import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingCount: 0,
    error: null,
    users: [],
    favourites: {},
    filters: {
      gender: null,
      nat: null,
      age: null
    },
    listnames: []
  },
  actions,
  mutations,
  getters
})
