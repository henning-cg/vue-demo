import favouriteLists from '@/api/favouriteLists';

export default {
  async loadUsers({ commit }) {
    try {
      commit('loadingstarted');
      let response = await fetch(`${process.env.VUE_APP_RANDOM_USER_API_BASE_URL}/?seed=seed&results=100`).then(response => response.json());
      let users = response.results
       
      commit('setUsers', {users});
    } catch (e) {
      commit('error', {message: e.toString()});
    } finally {
      commit('loadingstopped');
    }
  },

  toggleFavourite({ commit }, payload) {
    commit('toggleFavourite', payload);
  },

  setNatFilter({commit, state}, payload,){
    commit('setfilter', {nat:payload.nat, gender:state.filters.gender, age:state.filters.age})
  },

  setAgeFilter({commit, state}, payload,){
    commit('setfilter', {age:payload.age, gender:state.filters.gender, nat:state.filters.nat})
  },

  setGenderFilter({commit, state}, payload,){
    commit('setfilter', {gender:payload.gender, nat:state.filters.nat, age:state.filters.age})
  },

  async getListnames({ commit }) {
    try {
      commit('loadingstarted');
      let listnames = await favouriteLists.getListnames();
      commit('setListnames', {listnames})

    } catch (e) {
      commit('error', {message: e.toString()});
    } finally {
      commit('loadingstopped');
    }
  },

  async loadFavourites({ commit }, payload) {
    try {
      commit('loadingstarted');
      let profiles = await favouriteLists.loadList(payload.name);
      commit('setFavourites', {profiles})

    } catch (e) {
      commit('error', {message: e.toString()});
    } finally {
      commit('loadingstopped');
    }
  },

  async saveFavourites({ commit, getters }, payload) {
    try {
      commit('loadingstarted');
      let profiles = await favouriteLists.saveList(payload.name, getters.favourites);
      commit('setFavourites', {profiles})

    } catch (e) {
      commit('error', {message: e.toString()});
    } finally {
      commit('loadingstopped');
    }
  },
}
