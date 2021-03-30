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

    <v-dialog
      v-model="showSaveListDialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="secondary"
          v-bind="attrs"
          v-on="on"
        >
          Guardar favoritos
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Guardar lista de favoritos
        </v-card-title>


        <v-card-text>
          <v-text-field v-model="listName" label="Nombre de la lista"></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="secondary"
            text
            @click="showSaveListDialog = false"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="saveFavList"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </div>
</template>
<script>
import tableuser from "@/components/tableuser.vue";
import { mapGetters } from "vuex";
import moment from "moment";
import favouriteLists from  "@/api/favouriteLists";

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

  data() {
    return {
      showSaveListDialog: false,
      listName: "Mis favoritos"
    }
  },

  methods: {
    async saveFavList() {
      await favouriteLists.saveList(this.listName, this.favourites);
      this.showSaveListDialog = false;
    }
  },
};
</script>
