<template lang="html">
  <section class="carduser">

    <md-card >
         <md-card-area md-inset>
      <md-card-header>
          <md-card-media md-small>
          <img v-bind:src="us.picture.large" class="img-thumbnail img-responsive"  />
        </md-card-media>
        <md-card-header-text>
           <div class="person__map">
            <iframe width="100%" height="190" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" v-bind:src="'https://maps.google.com/maps?q=' + us.location.coordinates.latitude +',' + us.location.coordinates.longitude + '&z=7&amp;output=embed'">
            </iframe>
          </div>
        </md-card-header-text>
             <md-card-actions>
        <md-button  v-on:click="addfav"> <md-icon v-if="isfavourite">favorite</md-icon> <md-icon v-else>favorite_border</md-icon> </md-button>
      </md-card-actions>
      </md-card-header>
      <md-card-content>
         <div class="name">   <md-icon>perm_identity</md-icon> {{us.name.title}}  {{us.name.first}} {{us.name.last}}</div>
          </div>
          <div class="email">
      <md-icon>local_post_office</md-icon> {{us.email}}
          </div>
        </md-card-content>
         </md-card-area >
        <md-card-content>
        <div class="card-reservation">
         <div class="ciudad"><md-icon>location_on</md-icon>{{us.location.city}} {{us.location.street.name}} {{us.location.street.number}}</div>
          </div>
        
          <div class="tlfn">
                 <md-icon>call</md-icon> {{us.phone}}
          </div>
        </div>
      </md-card-content>
    
    </md-card>
  </section>

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
    us: {
      type: Object,
      default: 1
    }
  },
    methods: {
      addfav: function (){
        this.$store.dispatch("toggleFavourite",{userId:this.us.email} );
      }
    },
    computed: {
      isfavourite() {
      return this.$store.getters.isFavourite(this.us);
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