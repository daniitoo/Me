<template>
  <div>
    <div class="container" id="hero">
      <Bread :items="obtenerbread" :title="obtenerbread[1].title"></Bread>
      <v-layout row wrap seccion>
        <v-flex class="">
          <ul class="content-service animate__animated animate__delay-.5s animate__fadeInUp">
            <li
              class="text-center lia"
              v-for="(item, key, value) in services"
              :key="value"
            >
              <i :class="item.icon"></i>
              <br />
              <p>
                <strong title class="">{{ item.name }}</strong
                ><br /><span class="mt-3 d-block">{{ item.description }}</span>
              </p>
            </li>
          </ul>
        </v-flex>
      </v-layout>
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
  data() {
    return {
      services: [
        {
          name: "Creative Ideas",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales nec nulla ac aliquet.",
          icon: "far fa-lightbulb  icono",
        },
        {
          name: "Web Development",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales nec nulla ac aliquet.",
          icon: "fas fa-laptop-code icono",
        },
        {
          name: "Movil App Design",
          description:
            "Adaptability to the mobile era with a site that allows users to enter from any device.",
          icon: "fas fa-mobile-alt icono",
        },
        {
          name: "Design",
          description:
            "Design and creation of the total structure of the website adapted to your business.",
          icon: "fas fa-code-branch icono",
        },
      ],

      newItem: [],

    };
  },

  components: {
    Footer,
    Bread,
    Theme,
  },

  computed: {
    ...mapState(["breadItems"]),

    obtenerbread: function () {
      if (this.$route.path === "/services") {
        this.newItem.push(this.breadItems[0]);
        this.newItem.push(this.breadItems[3]);
        return this.newItem;
      }
    },
  },
};
</script>

<style >
.seccion {
  margin: 8em 0;
}

.asd {
  min-height: auto;
  padding-top: 20vh;
}
.icono {
  font-size: 30px;
  width: 65px;
  height: 65px;
  border-radius: 10%;
  padding: 24px 11px;
  border: 2px solid var(--primary);
  transition: all 0.4s ease-out;
  color: white;
  position: absolute;
  top: -15%;
  right: 0;
  left: 37%;
}
/* .icono:hover {
  background-color: var(--primary);
  color: var(--primary);
  border: 2px solid var(--primary);
} */
.icono::before {
  background-color: var(--primary);
  padding-top: 15px;
  border-radius: 10%;
  transition: all 0.4s ease-out;
  border: 2px solid var(--primary);
  display: block;
  height: 65px;
  width: 65px;
  margin: -17px 0 0 -3px;
}
.icono:hover:before {
  background-color: white;
}
.content-service {
  padding-left: 0 !important;
  width: 75%;
  margin: 0 auto;
}

@media (min-width: 600px) {
  .content-service {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
    padding: 0 !important;
  }
}

@media (min-width: 960px) {
  .content-service {
    grid-template-columns: repeat(4, 1fr);
    width: unset;
    margin: unset;
  }
}

.lia {
  position: relative;
  list-style: none;
  padding: 50px 15px 15px;
  transition: all 0.4s ease-in-out 0s;
  box-shadow: 0 1px 5px rgb(0 0 0 / 10%);
  -webkit-box-shadow: 0 1px 5px rgb(0 0 0 / 10%);
  margin-bottom: 100px;
  background-color: var(--white);
  border: 1px solid var(--borde);
}
@media (min-width: 900px){
  .lia{
    margin: 0;
  }
}

.lia:hover {
  transform: translateY(-10px);
  webkit-transform: translateY(-10px);
  -webkit-box-shadow: 0 20px 40px rgb(0 0 0 / 10%);
}

.lia:hover > i.icono {
  background-color: var(--primary);
  color: var(--primary);
  border: 2px solid var(--primary);
}
.lia:hover > i.icono::before {
  background-color: white !important;
  border: 2px solid var(--primary);
}
</style>