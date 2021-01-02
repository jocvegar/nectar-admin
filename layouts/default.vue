<template>
  <v-app dark>
    <v-navigation-drawer
      v-on-clickaway="drawerAway"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <div v-if="mobile">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </div>
      <div v-else>
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
        </v-btn>
      </div>

      <v-toolbar-title class="bender-text" v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-arm-flex</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="mt-4">
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="true" temporary fixed>
      <!-- <v-list>
        <v-list-item>
          <v-list-item-title class="pija--text">
            HOLA HIJOS - algun resumen aca
          </v-list-item-title>
        </v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-email</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Inbox</v-list-item-title>
        </v-list-item-content>
      </v-list> -->
      <v-list>
        <v-list-item v-for="([icon, text], i) in sideItems" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
var mobile = require("is-mobile");

export default {
  mixins: [clickaway],
  data() {
    return {
      clipped: true,
      drawer: false,
      miniVariant: false,
      rightDrawer: false,
      mobile: true,
      title: "NECTAR ADMIN",
      items: [
        {
          icon: "mdi-home-variant",
          title: "Home",
          to: "/"
        },
        {
          icon: "mdi-cup-water",
          title: "Ventas",
          to: "/ventas"
        }
      ],
      sideItems: [["mdi-skull-outline", "User"]]
    };
  },
  mounted() {
    this.mobile = mobile();
  },
  methods: {
    drawerAway: function() {
      // this.miniVariant = false;
      console.log("I was clicked");
    }
  }
};
</script>

<style>
.bender-text {
  font-family: "Bender", sans-serif;
}
.v-application {
  font-family: "Arboria", sans-serif;
}
</style>
