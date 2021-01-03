<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/logo.png"
        alt="Vuetify.js"
        class="mb-5"
        style="height:180px;"
      />
      <blockquote class="blockquote">
        HOLA GAYS
        <footer>
          <small>
            <em>&mdash;Nectar</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
import auth from "@/mixins/authMixin";

export default {
  mixins: [auth]
};
</script>
