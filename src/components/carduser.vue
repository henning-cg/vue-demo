<template lang="html">
 <v-container>
   
<v-layout justify-center>
<v-card v-if="us" >
   <v-list-item three-line>
       <v-list-item-avatar
        tile
        size="120">  <v-img :src="us.picture.large"></v-img></v-list-item-avatar>
      
      <v-list-item-content>
          <div class="person__map">
            <MapContainer
              style="height: 400px"
              :markerLat="us.location.coordinates.latitude"
              :markerLng="us.location.coordinates.longitude"
              :markerText="`${us.location.country}  ${us.location.street.name}, ${us.location.street.number}`"
            ></MapContainer>
            <!-- <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" v-bind:src="'https://maps.google.com/maps?q=' + us.location.coordinates.latitude+',' + us.location.coordinates.longitude + '&z=7&amp;output=embed'">
            </iframe> -->
          </div>
        </div>
      </div>
        
        <v-list-item-title class="headline mb-1">
          {{us.name.first}} {{us.name.last}}
        </v-list-item-title>
         <div class=" mb-2">
         <v-icon >
        mdi-email
        </v-icon>   {{us.email}}
        </div>
      </v-list-item-content>
     <v-list-item-avatar
        tile
        size="80"
      > <v-btn
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
      </v-btn></v-list-item-avatar>
    </v-list-item>
    </v-list-item>

     <v-divider class="mx-4"></v-divider>
     
     <v-card-text class="justify-center">
          <v-container>
         <v-list-item-content>
        <div class=" mb-2">
          <v-icon >
        mdi-map-marker
        </v-icon>   {{us.location.country}}  {{us.location.street.name}}, {{us.location.street.number}}
        </div>
        <div class=" mb-2">
           <v-icon >
        mdi-phone
        </v-icon> {{us.phone}}  
        </div>
      </v-list-item-content>
              </v-container>

       </v-card-text>

</v-card>
</v-layout>
</v-container>

</template>

<script lang="js">
  import MapContainer from "@/components/MapContainer.vue"

  export default  {
    name: 'carduser',
    components: {
      MapContainer
    },
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
  &__map {
    background: white;
    border: 0.8px solid #78bdfa;
    width: 30px;
   
  }
}
</style>
