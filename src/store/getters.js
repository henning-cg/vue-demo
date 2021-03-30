export default {
  filteredUsers(state) {
  return ( state.users
    .filter(user => !state.filters.gender || state.filters.gender == user.gender)
    .filter(user => !state.filters.nat  || state.filters.nat == user.nat)
    .filter(user => !state.filters.age || state.filters.age == user.dob.age));
  },
  userByEmail(state){
    return (email) => state.users.find(user => user.email == email)
  },
  favourites(state) {
    return state.users.filter(user => state.favourites[user.email]);
  },
  hasFavourites(state, getters) {
    return Object.keys(getters.favourites).length > 0;
  },
  isFavourite(state){
    return (user) => state.favourites[user.email]
  },
  isLoading(state) {
    return state.loadingCount > 0;
  },
  getNats(state){
    let nats = {}
    nats[""] = true;
    state.users.forEach(user => {
      nats[user.nat] = true
    });
    
    return Object.keys(nats).sort()
  },

  getAge(state){
    let ages = {}
    ages[""] = true;
    state.users.forEach(user => {
      ages[user.dob.age] = true
    });
    return Object.keys(ages).sort()
  },


}
