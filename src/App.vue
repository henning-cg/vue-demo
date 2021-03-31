<template>
  <v-app>
    <v-main>
    <v-progress-circular v-if="loadingCount"
      indeterminate
      color="primary"
      class="global-loading"
      
    ></v-progress-circular>
      <v-snackbar
        v-model="showError"
        color="red"
      >
        {{ error }}

        <template v-slot:action="{ attrs }">
          <v-btn
            text
            v-bind="attrs"
            @click="onErrorAck"
          >
            Cerrar
          </v-btn>
        </template>
      </v-snackbar>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
  .global-loading {
    position: fixed;
    top:0;
    right:0;

  }
</style>

<script>


import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
  },

  computed: {
    ...mapState(["error", "loadingCount"]),
    showError: {
      get() {
        return !!this.$store.state.error;
      },
      set(v) {
        this.$store.commit('error', {message: v});
      }
    }    
  },

  mounted(){
    this.$store.dispatch("loadUsers");
  },

  methods: {
    onErrorAck() {
      this.$store.commit('error', {message: null});
    }
  },

};
</script>
