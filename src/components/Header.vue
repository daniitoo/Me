<template>
  <div>
    <v-app-bar app :elevation="0" color="transparent" class="mx-5">
      <v-btn icon>
        <i class="fas fa-laptop-code"></i>
      </v-btn>
      <v-toolbar-title class="pl-2">DaniitooCode</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        offset-y
        top
        origin="top center"
        transition="scale-transition"
        open-on-hover
      >
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon v-on="on" v-bind="attrs"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <router-link to="/" class="text-decoration-none">
            <v-list-item link>
              <a class="primary--text">Home</a>
            </v-list-item>
          </router-link>
          <router-link to="/about" class="text-decoration-none">
            <v-list-item link>
              <a class="primary--text">About</a>
            </v-list-item>
          </router-link>
          <router-link to="/services" class="text-decoration-none">
            <v-list-item link>
              <a class="primary--text">Services</a>
            </v-list-item>
          </router-link>
          <router-link to="/work" class="text-decoration-none">
            <v-list-item link>
              <a class="primary--text">Work</a>
            </v-list-item>
          </router-link>
          <router-link to="/contact" class="text-decoration-none">
            <v-list-item link>
              <a class="primary--text">Contact</a>
            </v-list-item>
          </router-link>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "barra",
  data() {
    return {};
  },
  methods: {
    option: function () {},
  },
};
</script>