<template>
  <v-layout row wrap ma-0>
    <v-flex xs12 sm12 md6>
      <div class="backhero text-left">
        <div class="d-flex justify-center flex-column align-left altura pl-10">
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
            class="text-decoration-none font-weight-bold"
          >
            UI/UX DESIGNER & DEVELOPER
          </a>
          <h1 class="font-weight-bold display-4 my-5 animate__animated animate__fadeIn animate__delay-.5s texto--text">I'm Daniel Huillcahuari Durand</h1>
          <div>
             <v-btn depressed color="primary" class="mr-2">
              <router-link to="/about" class="text-decoration-none white--text">
                More about me
              </router-link>
            </v-btn>
            <v-btn outlined color="primary">
              <router-link
                to="/contact"
                class="text-decoration-none primary--text"
              >
                Hire me
              </router-link>
            </v-btn>
          </div>
        </div>
      </div>
    </v-flex>

    <v-flex
      class="altura hidden-sm-and-down"
      xs12
      sm12
      md6
    >
      <v-img
        :src="require('../assets/logo.svg')"
        class=""
        contain
        height="100vh"
      >
      </v-img>
    </v-flex>
  </v-layout>
</template>

<script>
import barra from "./Header.vue";

export default {
  components: {
    barra,
  },

  data: () => ({}),

};
</script>

<style>

:root{
  --primary : var(--v-primary-base);
  --texto : #545454;
  --white : var(--v-white-base);
  --borde : var(--v-borde-base);
  --background : var(--v-background-base);
}
/* .v-application
   background-color: var(--v-primary); 
   background-color: #f8f8f8!important; 
} */

.altura {
  height: 100vh;
  min-height: 100%;
  overflow: hidden;
}
.texto {
  text-align: left !important;
}
.backhero {
  background-image: url("../assets/logo.svg");
  position: top center;
  background-size: cover;
  height: 100vh;
}
@media (min-width: 960px) {
  .backhero {
    background-image: unset;
  }
}
</style>
