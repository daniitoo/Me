<template>
    <v-card flat :style="flotando" color="transparent" id="claro">
      <v-toolbar flat height="72" color="transparent">
        <v-switch
          v-model="$vuetify.theme.dark"
          inset
          label="Theme Dark"
          class="font-weight-medium"
          color="primary"
          persistent-hint
        ></v-switch>
      </v-toolbar>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      flotando: {
        position: "fixed",
        bottom: "100px",
        left: "-20px",
        transform: "rotate(270deg)",
        "z-index": "2",
      },
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll(event) {
      // let tamañoPantalla = window.innerHeight/4;
      // let animacion = document.getElementById("claro");
      // animacion.style.bottom = tamañoPantalla
      // console.log(tamañoPantalla)
      // let posicion = animacion.getBoundingClientRect().top;
      // console.log(animacion);
      // if (posicion < tamañoPantalla) {
      //   animacion.className =
      //     "animate__animated animate__bounceInLeft display-2 animate__delay-.5s text-center font-weight-medium subtitle";
      // }
    },
  },
};
</script>

<style>
.theme--light.v-label {
  color: var(--texto);
}

</style>