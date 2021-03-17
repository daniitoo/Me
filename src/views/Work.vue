<template>
  <div>
    <div
      class="container"
      :style="{ background: $vuetify.theme.themes[theme].background }"
    >
      <Bread :items="obtenerbread" :title="obtenerbread[1].title"></Bread>
      <v-layout class="ancho">
        <v-flex class="content-work">
          <div v-for="(val, key, i) in workstate" :key="i" class="mb-10 work">
            <v-card class="tre">
              <router-link
                :to="{
                  name: 'Portafolio',
                  params: { id: key, llave: val.title },
                }"
              >
                <v-img
                  @mousemove="val.img = true"
                  @mouseout="val.img = false"
                  :class="val.text === true ? 'picture' : 'imagen'"
                  :aspect-ratio="15 / 10"
                  position="top center"
                  id="img"
                  border
                  class="imagen"
                  :src="val.imagen1"
                ></v-img>
              </router-link>
            </v-card>
            <v-card-title primary-title>
              <div class="rela">
                <h3 class="headlinec texto--text mt-5">{{ val.title }}</h3>
                <p
                  class="body-1 title texto--text"
                  id="qwerty"
                  :class="val.img === true ? 'primero' : 'title body-1'"
                  @mousemove="val.text = true"
                  @mouseout="val.text = false"
                >
                  {{ val.desc }}
                </p>
                <span
                  class="sub body-1 texto--text"
                  id="sub"
                  :class="val.img === true ? 'segundo' : 'sub body-1'"
                  >Show Project</span
                >
              </div>
            </v-card-title>
          </div>
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
  data() {
    return {
      newItem: [],
      red: "#ff5252",
    };
  },

  computed: {
    ...mapState(["workstate"]),
    ...mapState(["breadItems"]),

    obtenerbread: function () {
      if (this.$route.path === "/work") {
        this.newItem.push(this.breadItems[0]);
        this.newItem.push(this.breadItems[4]);
        return this.newItem;
      }
    },

    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  components: {
    Footer,
    Bread,
    Theme,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    mostrar: function () {
      var sobremi = document.getElementById("img");
      var afectado = document.getElementById("qwerty");
      var sub = document.getElementById("sub");

      sobremi.addEventListener(
        "mousemove",
        () => {
          afectado.className = "primero body-1";
          sub.className = "segundo body-1";
        },
        false
      );

      sobremi.addEventListener(
        "mouseout",
        () => {
          afectado.className = "title body-1";
          sub.className = "sub body-1";
        },
        false
      );
    },

    handleScroll(event) {
      let tamañoPantalla = window.innerHeight / 2.5;

      document.querySelectorAll("div.work").forEach((box) => {
        box.getBoundingClientRect().top;
        // console.log(box.getBoundingClientRect().top);
        if (box.getBoundingClientRect().top < tamañoPantalla) {
          box.className =
            "animate__animated animate__pulse animate__delay-.5s mb-10";
        }
      });
    },
  },
};
</script>

<style>
.ancho {
  width: 80%;
  margin: 8em auto;
}

.tre {
  overflow: hidden;
  padding-bottom: 100%;
}

.imagen {
  -webkit-transition: 0.4s;
  transition: 0.4s;
  height: 100%;
  content: "";
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}

.tre:hover .imagen {
  -webkit-transform: scale3d(1.1, 1.1, 1.1);
  transform: scale3d(1.1, 1.1, 1.1);
}

.picture {
  -webkit-transform: scale3d(1.1, 1.1, 1.1);
  transform: scale3d(1.1, 1.1, 1.1);
}

.rela {
  position: relative;
}
.title {
  display: block;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  height: 40px;
  padding: 15px 0 20px;
  cursor: pointer;
  margin: 0;
  cursor: pointer;
}

.title:hover {
  -webkit-transform: translateY(-25px);
  transform: translateY(-25px);
  opacity: 0;
}
.primero {
  display: block;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  height: 40px;
  padding: 15px 0 20px;
  cursor: pointer;
  margin: 0;

  -webkit-transform: translateY(-25px);
  transform: translateY(-25px);
  opacity: 0;
}

.sub {
  position: absolute;
  opacity: 0;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  -o-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  cursor: pointer;
  /* color: #d90a2c; */
}
.title:hover ~ .sub {
  -webkit-transform: translateY(-45px);
  transform: translateY(-45px);
  opacity: 1;
}

.segundo {
  display: block;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
  height: 40px;
  padding: 15px 0 20px;
  cursor: pointer;
  margin: 0;
  -webkit-transform: translateY(-60px);
  transform: translateY(-60px);
  opacity: 1;
}

/* .nuevo {
   width: 80%;
   margin: 0 auto;
} */

/* .work:nth-last-child(odd) {
   width: 50%;
   margin: 0 auto;
} */
/*
.work:nth-last-child(odd) {
  padding: 0 60px 0 40px;
} */

@media (min-width: 600px) {
  .content-work {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 60px;
  }
}

.red {
  color: red;
}
</style>