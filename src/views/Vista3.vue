<template>
  <div class="Vista3">
    <h1>Favoritos</h1>
    <v-card>
      <tableuser :usuarios="favourites" />
    </v-card>
    <v-btn color="primary" :disabled="!hasFavourites">
      <vue-blob-json-csv
        title="Descargar en CSV"
        file-type="csv"
        file-name="todos"
        :data="csvfavourites"
        class="button is-link"
      />
    </v-btn>
  </div>
</template>
<script>
import tableuser from "@/components/tableuser.vue";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  name: "Vista3",

  components: {
    tableuser,
  },

  computed: {
    ...mapGetters(["favourites", "hasFavourites"]),
    csvfavourites() {
      return this.favourites.map((fav) => {
        return {
          gender: fav.gender,
          name: `${fav.name.first} ${fav.name.last}`,
          email: fav.email,
          nacionalidad: fav.nat,
          fechaNacimiento: moment(fav.dob.date).format("MM/DD/YYYY"),
          fechaRegistro: moment(fav.registered.date).format("MM/DD/YYYY"),
        };
      });
    },
  },

  methods: {},
};
</script>
