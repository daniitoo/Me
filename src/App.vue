<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
      <Header></Header>
    <!-- <v-app-bar app :elevation="0" color="transparent">
          <v-btn icon class="bar">
      <i class="fas fa-laptop-code"></i>
    </v-btn>
      <v-spacer></v-spacer>
      <Header></Header>
    </v-app-bar> -->
    <router-view />
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  components: {
    Header,
  },
  data: () => ({
    //
  }),
};
</script>
