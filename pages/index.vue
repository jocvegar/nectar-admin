<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center mb-4">
        <logo />
      </div>
      <v-card class="text-center">
        <v-card-title class="headline arboria-text">
          Algo Nectar
        </v-card-title>
        <v-card-text>
          <p>
            {{ test }}
          </p>
          <hr class="my-3" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { db } from "~/plugins/firebase.js";

export default {
  components: {
    Logo
  },
  data() {
    return {
      test: ""
    };
  },
  mounted() {
    this.callsomething();
  },
  methods: {
    callsomething() {
      console.log("HOLA");
      db.doc("settings/global")
        .get()
        .then(doc => {
          this.test = doc.data().test;
        });
    }
  }
};
</script>
