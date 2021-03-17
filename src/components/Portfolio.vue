<template>
  <div>
    <div class="container">
      <div class="text-center asd">
        <v-breadcrumbs :items="items" class="prueba">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <h1 class="display-2 font-weight-medium mt-5">{{ items[2].show }}</h1>
      </div>

      <v-layout class="new-grid seccion">
        <v-flex class="uno">
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item, i) in workstate[id].imagenes"
              :key="i"
              :src="item"
            ></v-carousel-item>
          </v-carousel>
          <!-- <v-img
          :aspect-ratio="15 / 16"
          position="top center"
          border
          class="mb-5"
          :src="workstate[id].imagen1"
        ></v-img> -->

          <!-- <v-img
          border
          :src="workstate[id].imagen2"
        ></v-img> -->
        </v-flex>

        <v-flex class="dos">
          <div class="contenido-portafolio">
            <p class="texto--text font-weight-regular mb-10">
              {{ workstate[id].description }}
            </p>
            <h4 class="mb-1">Task</h4>
            <p class="font-weight-medium texto--text ma-0">
              {{ workstate[id].task }}
            </p>
            <div class="caracteristicas">
              <ul
                v-for="(value, key, i) in workstate[0].characteristics"
                :key="i"
              >
                <li>
                  <strong>{{ key }}</strong>
                  <span class="texto--text font-weight-regular">{{
                    value
                  }}</span>
                </li>
              </ul>
            </div>
          </div>
        </v-flex>

        <v-flex class="tres">
          <div class="d-flex">
            <v-dialog v-model="dialog" width="70%">
              <template v-slot:activator="{ on }">
                <v-img
                  :aspect-ratio="15 / 16"
                  position="top center"
                  border
                  class="imagen-muestra"
                  :src="img2"
                  v-on="on"
                ></v-img>
              </template>
              <v-card>
                <v-img
                  position="top center"
                  border
                  class="imagen-muestra"
                  :src="img2"
                ></v-img>
              </v-card>
            </v-dialog>
            <!-- <v-dialog v-model="dialog" width="70%">
              <template v-slot:activator="{ on }">
                <v-img
                  :aspect-ratio="15 / 16"
                  position="top center"
                  border
                  class="imagen-muestra"
                  :src="img2"
                  v-on="on"
                ></v-img>
              </template>
              <v-card>
                <v-img
                  position="top center"
                  border
                  class="imagen-muestra"
                  :src="img2"
                ></v-img>
              </v-card>
            </v-dialog> -->
            <!-- <v-dialog v-model="dialog" width="70%">
              <template v-slot:activator="{ on }">
                <v-img
                  :aspect-ratio="15 / 16"
                  position="top center"
                  border
                  class="imagen-muestra"
                  :src="img3"
                  v-on="on"
                ></v-img>
              </template>
              <v-card>
                <v-img
                  position="top center"
                  border
                  class="imagen-muestra"
                  :src="img3"
                ></v-img>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialog" width="70%">
              <template v-slot:activator="{ on }">
                <v-img
                  :aspect-ratio="15 / 16"
                  position="top center"
                  border
                  class="imagen-muestra"
                  :src="img4"
                  v-on="on"
                ></v-img>
              </template>
              <v-card>
                <v-img
                  position="top center"
                  border
                  class="imagen-muestra"
                  :src="img4"
                ></v-img>
              </v-card>
            </v-dialog> -->
            <!-- <v-img
                :aspect-ratio="15 / 16"
                position="top center"
                border
                class="imagen-muestra"
                :src="workstate[id].imagen1"
              ></v-img> -->
          </div>
        </v-flex>

        <v-flex class="cautro">
          <v-dialog v-model="dialog" width="70%">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
            </template>
            <v-card>
              <v-img
                position="top center"
                border
                class="imagen-muestra"
                :src="workstate[id].imagen2"
              ></v-img>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog" width="70%">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
            </template>
            <v-card>
              <v-img
                position="top center"
                border
                class="imagen-muestra"
                :src="workstate[id].imagen1"
              ></v-img>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog" width="70%">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
            </template>
            <v-card>
              <v-img
                position="top center"
                border
                class="imagen-muestra"
                :src="img1"
              ></v-img>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
    </div>
    <Theme />
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "@/components/Footer";
import Bread from "@/components/Breadcrumbs";
import Theme from "@/components/Themes";

export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "Work",
          disabled: false,
          href: "/work",
          show: "Portfolio",
        },
        {
          text: this.$store.state.workstate[this.$route.params.id].title,
          disabled: true,
          href: "/portfolio/" + this.$route.params.id,
          show: this.$store.state.workstate[this.$route.params.id].title,
        },
      ],
      id: this.$route.params.id,
      val: this.$route.params.llave,

      img1: this.$store.state.workstate[this.$route.params.id].imagen1,
      img2: this.$store.state.workstate[this.$route.params.id].imagen2,
      img3: this.$store.state.workstate[this.$route.params.id].imagen3,
      img4: this.$store.state.workstate[this.$route.params.id].imagen4,

      dialog: false,
      imprenta: "",
    };
  },
  components: {
    Footer,
    Bread,
    Theme,
  },

  mounted() {},

  computed: {
    ...mapState(["workstate"]),

    mostrarImg: function () {
      // if(this.workstate[this.$route.params.id].imagenes === this.workstate[this.$route.params.id].imagenes.imagen1){
      //   console.log('oks')
      // }
      console.log(this.workstate[this.$route.params.id].imagenes);
      return this.workstate[this.$route.params.id].imagenes;
    },
    mosa: function () {
      console.log(this.imprenta);
      // console.log(this.mostrarImg)
    },
  },
};
</script>

<style lang="css">
.seccion {
  margin: 8em 0;
}

.prueba {
  align-items: center;
  display: block;
  font-weight: bold;
}

.asd {
  min-height: auto;
  padding-top: 20vh;
}
/* .contenido-portafolio{
    position: relative;
    top: 0px;
    left: 0px;
  } */
.contenido-portafolio ul {
  margin-top: 50px;
  border-top: 1px solid rgba(136, 136, 136, 0.65);
  padding: 10px 0;
}

.contenido-portafolio ul li {
  list-style: none;
  margin-top: 2px;
}

.caracteristicas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;
}

.caracteristicas ul li {
  display: table-caption;
  width: 100%;
}

.new-grid {
  display: grid;
}
.dos {
  grid-row: 3 / 4;
}
.tres {
  grid-row: 2 / 3;
  margin-top: 50px;
}

@media (min-width: 768px) {
  .new-grid {
    grid-template-columns: 50% 50%!important;
    column-gap: 20px;
  }

  .dos {
    grid-row: unset;
  }

  .tres {
    grid-column: 1 / 3;
  }
}

.imagen-muestra {
  margin-right: 20px;
}
.imagen-muestra:last-child {
  margin-right: 0;
}

.v-responsive__content{
  width: unset!important;
}
</style>
