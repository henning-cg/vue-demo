const axios = require('axios');

export default {
  async saveList(name, profiles) {
    return axios.post(`${process.env.VUE_APP_FAVOURITE_LISTS_API_BASE_URL}/lists`, {
      name,
      profiles
    }).then(r => r.data);
  },

  async getListnames() {
    return axios.get(`${process.env.VUE_APP_FAVOURITE_LISTS_API_BASE_URL}/lists`).then(r => r.data.lists);
  },

  async loadList(name) {
    return axios.get(`${process.env.VUE_APP_FAVOURITE_LISTS_API_BASE_URL}/lists/${name}`).then(r => r.data);
  }
}
