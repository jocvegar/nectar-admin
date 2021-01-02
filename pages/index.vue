<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center mb-4">
        <logo />
      </div>
      <v-card class="text-center">
        <v-card-title class="headline">
          Algo Nectar
        </v-card-title>
        <v-card-text>
          <p>
            Quisiera tener el logo nuevo 😁
          </p>

          <hr class="my-3" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>
