<template>
 <div class="home">
   <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="gender">Gender</label>
          <md-select v-model="gender" @selected="onGender" name="gender" id="gender">
            <md-option value=""></md-option>
            <md-option value="female">Female</md-option>
            <md-option value="male">Male</md-option>
          </md-select>
        </md-field>
      </div>
      <!-- 
      <div class="md-layout-item">
        <md-field>
          <md-select v-model="country" name="country" id="country" placeholder="Country">
            <md-option value="AU">Australia</md-option>
            <md-option value="BR">Brazil</md-option>
            <md-option value="CA">Canada</md-option>
            <md-option value="CH">Switzerland</md-option>
            <md-option value="DE">Germany</md-option>
             <md-option value="DK">Denmark</md-option>
            <md-option value="ES">Spain</md-option>
             <md-option value="FI">Finland</md-option>
              <md-option value="FR">France</md-option>
             <md-option value="GB">United Kingdom</md-option>
             <md-option value="IE">Ireland</md-option>
             <md-option value="IR">Iran</md-option>
             <md-option value="NO">Norway</md-option>
            <md-option value="NL">Nederlands</md-option>
             <md-option value="NZ">New Zealand</md-option>
            <md-option value="TR">Turkey</md-option>
            <md-option value="US">USA</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-layout-item">
        <md-field>
          <label for="age">Age</label>
          <md-select v-model="age" name="age" id="age">
            <md-option value="<=1969">1969</md-option>
            <md-option value="1970">1970</md-option>
            <md-option value="1971">1971</md-option>
            <md-option value="1972">1972</md-option>
            <md-option value="1973">1971</md-option>
            <md-option value="1974">1974</md-option>
            <md-option value="1975">1975</md-option>
            <md-option value="1976">1976</md-option>
            <md-option value="1977">1977</md-option>
            <md-option value="1978">1978</md-option>
            <md-option value="1979">1979</md-option>
            <md-option value="1980">1980</md-option>
            <md-option value="1981">1981</md-option>
            <md-option value="1982">1982</md-option>
            <md-option value="1983">1983</md-option>
            <md-option value="1984">1984</md-option>
            <md-option value="1985">1985</md-option>
            <md-option value="1986">1986</md-option>
            <md-option value="1987">1987</md-option>
            <md-option value="1988">1988</md-option>
            <md-option value="1989">1989</md-option>
            <md-option value="1990">1990</md-option>
            <md-option value="1991">1991</md-option>
            <md-option value="1993">1992</md-option>
            <md-option value="1994">1994</md-option>
            <md-option value="1995">1995</md-option>
            <md-option value="1996">1996</md-option>
            <md-option value="1997">1997</md-option>
            <md-option value="1998">1998</md-option>
            <md-option value="1999">1999</md-option>
            <md-option value="2000">2000</md-option>
            <md-option value="2001">2001</md-option>
          </md-select>
        </md-field>
      </div>
      -->
    </div>
     <md-button class="md-primary md-raised" v-on:click="filtrar">Filter</md-button>
      <md-button class="md-secondary md-raised" v-on:click="reset">Reset Filter</md-button>
            <md-button class="md-succes md-raised" @click="$router.push('Vista3')">Fav List</md-button>
  <div> 
     <tableuser :usuarios="users" />
  </div>
 </div>
            
</template>

<script>

import ApiUsers from '../ApiRandomUser.js'
import tableuser from "@/components/tableuser.vue"

const toLower = (text) => {
  return text.toString().toLowerCase();
};

const searchByName = (items, term) => {
  if (term) {
    return items.filter((item) =>
    toLower(item.name.first).includes(toLower(term)
    ) ||
    toLower(item.name.last).includes(toLower(term)
    ))
  }

  return items;
};
const filterByNationality= (items, term) => {
  if (term) {
    return items.filter((item) =>
    toLower(item.nat).includes(toLower(term)
    ))
  }
  return items;
};

const filterByAge= (items, term) => {
  if (term) {
    return items.filter((item) =>
   item.dob.date .includes(term)
    )
  }
  return items;
};

 const filterByGender = (items, term) => {
   console.log(term)
  if(term === 'female') {
    return items.filter((item) =>
    item.gender.match('female'))
  }
  else if(term === 'male'){
    return items.filter((item) =>
    item.gender.match('^male'))
  }
  return items;
}

const filterGeneral = (items,gen,nat, age) => {
     return filterByAge( filterByNationality(filterByGender(items,gen),nat), age);
}
import { mapState } from 'vuex'
export default {
  name: "TableSearch",

  components: {
    tableuser,
  },
 computed: {
   ...mapState(["users","filters"])
 },
  data: () => ({
    gender:""
  }),
 
   mounted(){
     // invocar los métodos

    },
  methods: {

    filtrar: function (event) {
      if(event){     

       this.searched = filterGeneral(this.users,this.gender, this.country, this.age);
      }
    },
    onGender(event){
      this.$store.dispatch("setGenderFilter", {gender:event.value});
    },
      reset: function (event) {
      if(event){     
        this.getUsers();
        this.gender = null;
        this.country = null;
        this.age = null;
      // this.searched = filterGeneral(this.users,this.gender, this.country, this.age);
      }
    },
    chooseUser(item){
        console.log(item);
         this.$router.push({ name: "Vista2", params: {id: item.email} })
    },
  
  },
};
</script>


<style lang="scss" scoped>
.md-field {
  max-width: 300px;
}
</style>
