<template lang="html">
 <v-container>
   <v-row>
  <v-col cols="2">
   <v-img
   :src="us.picture.large"
></v-img>
  </v-col >
  <v-col cols="8">
  </v-col >
  <v-col cols="2">
   <v-btn
        class="ma-2"
        color="primary"
        @click="addfav"
        >
        <v-icon v-if="isfavourite">
        mdi-heart
        </v-icon>
         <v-icon v-else>
        mdi-heart-outline
        </v-icon>
      </v-btn>
 </v-col >
</v-row>
</v-container>



</template>

<script lang="js">
  export default  {
    name: 'carduser',
    data: () => ({
    ususarios: ' ',
   
  }),
    mounted () {
       // console.log( this.us); 
    },
    
   props: {
    us: null
  },
    methods: {
      addfav: function (){
        this.$store.dispatch("toggleFavourite",{userId:this.us.email} );
      }
    },
    computed: {
      isfavourite() {
      return !!this.us && this.$store.getters.isFavourite(this.us);
      }   

    }
}


</script>

<style lang="scss" scoped>
  .md-card {
    width: 350px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  .person {
      background: radial-gradient(ellipse at center, #ffffff 0%, #e5e5e5 100%);
  border: 1px solid #666;
  border-radius: 4px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  &__map {
    background: white;
    border: 2px solid #a5cdf1;
    border-radius: 5px;
    padding: 5px 5px 0;
    margin: 0 15px 15px;
  }
}
</style>