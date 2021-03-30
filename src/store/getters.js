export default {
  users(state) {
    // TODO: Add filtering
    return state.users;
  },
  userByEmail(state){
    return (email) => state.users.find(user => user.email == email)
  },
  favourites(state) {
    return Object.fromEntries(Object.entries(state.users).filter(([userId]) => state.favourites[userId]));
  },
  hasFavourites(state, getters) {
    return Object.keys(getters.favourites).length > 0;
  },
  isFavourite(state){
    return (user) => state.favourites[user.email]
  },
  isLoading(state) {
    return state.loadingCount > 0;
  }
}
