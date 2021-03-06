import Vue from 'vue'

export default {
  setUsers(state, payload) {
    Vue.set(state, 'users', payload.users)
  },

  error(state, payload) {
    state.error = payload.message;
  },

  loadingstarted(state) {
    state.loadingCount++;
  },

  loadingstopped(state) {
    state.loadingCount--;
  },

  setListnames(state, payload) {
    state.listnames = payload.listnames;
  },

  toggleFavourite(state, payload) {
    Vue.set(state.favourites, payload.userId, !state.favourites[payload.userId]);
  },

  setFavourites(state, payload) {
    state.favourites = payload.profiles.reduce((favourites, profile) => {
      favourites[profile.email] = true;
      return favourites;
    }, {});
  },

  setfilter(state, payload) {
    state.filters = payload
  }
}
