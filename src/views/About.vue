<template>
  <div>
    <div class="container">
      <Bread :items="obtenerbread" :title="obtenerbread[1].title"></Bread>
      <v-layout row wrap justify-space-between seccion>
        <v-flex
          xs12
          md5
          sm12
          mb-16
          class="animate__animated animate__slideInUp animate__delay-.5s"
        >
          <ul class="content-element">
            <li
              v-for="n in knowledge"
              :key="n.i"
              class="element-know text-center"
            >
              <span class="display-3 primary--text font-weight-bold">{{
                n.amount
              }}</span
              ><br />
              <span class="footerTitle--text">{{ n.name }}</span>
            </li>
          </ul>
        </v-flex>

        <v-flex
          xs12
          md6
          sm12
          class="animate__animated animate__slideInUp animate__delay-.5s"
        >
          <span class="subheading primary--text"> About me </span>
          <h2 class="display-1 font-weight-bold my-5">
            A UI/UX Designer & Web Developer Based in Philippines
          </h2>
          <p class="footerTitle--text py-2 font-weight-bold">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <ul class="temp pa-0 my-2">
            <li
              v-for="(nam, key) in infoPersonal"
              :key="key"
              class="content-info text-left"
            >
              <span class="font-weight-medium texto--text footerTitle--text">
                {{ key }}:
              </span>
              <span class="primary--text font-weight-bold">{{ nam }}</span>
            </li>
          </ul>
          <v-btn color="secondary" class="mt-5 pa-5 footerText--text" elevation="0"
            >Download CV</v-btn
          >
        </v-flex>
      </v-layout>

      <v-container fluid class="seccion">
        <span class="subheading text-center primary--text"> SKILLS <br /></span>
        <h2
          class="display-2 text-center font-weight-medium subtitle"
          id="animacion-h2"
        >
          MySkill
        </h2>
        <v-layout>
          <v-flex xs12 sm12 md12  class="mt-16">
            <div class="barras-pensalas">
              <div
                v-for="(value, key, index) in skills"
                :key="index"
                class="mb-8 barras-move"
              >
                <v-subheader class="relative"
                  ><h3 class="text-uppercase texto--text">{{ value.name }}</h3>
                  <strong
                    class="absolute primary--text"
                    :style="{ width: 109 - value.porcentaje + '%' }"
                    >{{ value.porcentaje }}%</strong
                  >
                </v-subheader>
                <v-progress-linear
                  v-model="value.porcentaje"
                  rounded
                  height="10"
                  color="primary"
                  dark
                >
                </v-progress-linear>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <Theme></Theme>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "@/components/Footer";
import Bread from "@/components/Breadcrumbs";
import Theme from "@/components/Themes";

export default {
  data: () => ({
    newItem: [],

    knowledge: [
      {
        name: "Lenguaje",
        amount: 5,
      },
      {
        name: "Project Done",
        amount: 4,
      },
      {
        name: "Framework",
        amount: 6,
      },
      {
        name: "DataBase",
        amount: 2,
      },
    ],

    skills: [
      {
        name: "Java Script",
        porcentaje: 95,
      },
      {
        name: "HTML5",
        porcentaje: 100,
      },
      {
        name: "Css3",
        porcentaje: 95,
      },
      {
        name: "Vue",
        porcentaje: 90,
      },
      {
        name: "WordPress",
        porcentaje: 90,
      },
      {
        name: "JQuery",
        porcentaje: 95,
      },
      {
        name: "Database",
        porcentaje: 90,
      },
      {
        name: "Adobe Ilustrator",
        porcentaje: 80,
      },
      {
        name: "ADOBE PHOTOSHOP",
        porcentaje: 90,
      },
    ],

  }),

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll(event) {
      let tamañoPantalla = window.innerHeight;

      let animacion = document.getElementById("animacion-h2");
      let posicion = animacion.getBoundingClientRect().top;
      if (posicion < tamañoPantalla) {
        animacion.className =
          "animate__animated animate__bounceInUp animate__delay-.5s display-2 text-center font-weight-medium subtitle";
      }
      document
        .querySelectorAll("div.barras-move")
        .forEach((box) =>{
          box.getBoundingClientRect().top
          if(box.getBoundingClientRect().top < tamañoPantalla){
            box.className = "animate__animated animate__bounceInUp animate__delay-1.5s mb-8";
          }
        });
    },
  },

  components: {
    Footer,
    Bread,
    Theme,
  },
  computed: {
    ...mapState(["infoPersonal", "breadItems"]),

    obtenerbread: function () {
      if (this.$route.path === "/about") {
        this.newItem.push(this.breadItems[0]);
        this.newItem.push(this.breadItems[1]);
        return this.newItem;
      }
    },
  },
};
</script>

<style>
.seccion {
  margin: 10em 0;
}

.content-element {
  list-style: none;
  width: 75%;
  margin: 0 auto 70px;
}

@media (min-width: 600px) {
  .content-element {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 25px;
    list-style: none;
    margin: 0;
  }
  .temp {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    list-style: none;
  }
}

@media (min-width: 960px) {
  .content-element {
    width: unset;
  }
}

.element-know {
  width: 100%;
  padding: 1.6rem;
  margin-bottom: 20px;
  background-color: var(--white);
  border: 2px solid var(--borde);
}

@media (min-width: 600px) {
  .element-know {
    padding: 3.5rem;
  }
}

ul {
  padding: 0 !important;
}
.content-info {
  display: grid;
  grid-template-columns: 35% 65%;
  margin: 10px 20px 10px 0px;
  column-gap: 10px;
}

.subtitle {
  margin-top: 20px;
}

.absolute {
  position: absolute;
  right: 0;
}

@media (min-width: 600px) {
  .barras-pensalas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
  }
}

@media (min-width: 960px) {
  .barras-pensalas {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 50px;
  }
}

.relative {
  position: relative;
  padding: 0;
}

.subheading {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-family: rRoboto, sans-serif;
  display: block;
  margin-bottom: 5px;
}

</style>