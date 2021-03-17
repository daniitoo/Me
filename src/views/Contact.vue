<template>
  <div>
    <div class="container">
      <Bread :items="obtenerbread" :title="obtenerbread[1].title"></Bread>
      <v-layout row wrap class="seccion">
        <v-flex xs12 md6 sm12 px-5 mb-16>
          <v-form v-model="valid" class="animate__animated animate__bounceInLeft animate__delay-1.5s">
            <h3>Contact us</h3>
            <p>We're open for any suggestion or just to have a chat</p>
            <v-layout>
              <ul class="contac-footer list-contac my-3">
                <li
                  v-for="(info, index, key) in newInfo"
                  :key="key"
                  class="mb-4"
                >
                  <strong class="d-block">{{ index }}:</strong> {{ info }}
                </li>
              </ul>
            </v-layout>
            <v-layout wrap>
              <v-flex xs12 md12>
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="15"
                  label="First name"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md12>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md12>
                <v-text-field
                  v-model="subject"
                  label="Subject"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs12 md12>
                <v-textarea
                  name="input-7-1"
                  label="Create a message here"
                  clearable
                  hint="Hint text"
                ></v-textarea>
              </v-flex>
            </v-layout>
          <v-btn depressed color="mt-5 pa-5 secondary">Send Message</v-btn>
          </v-form>
        </v-flex>

        <v-flex xs12 md6 sm12 px-5 class="animate__animated animate__bounceInRight animate__delay-1.5s">
          <div id="mapa"></div>
        </v-flex>
      </v-layout>
    </div>
    <Theme></Theme>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import Footer from "@/components/Footer";
import Bread from "@/components/Breadcrumbs";
import Theme from "@/components/Themes";

export default {
  data() {
    return {
      newItem: [],

      valid: false,
      firstname: "",
      subject: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 15 || "Name must be less than 10 characters",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },

  components: {
    Footer,
    Bread,
    Theme,
  },

  mounted() {
    if (document.getElementById("mapa")) {
      var map = L.map("mapa").setView([-12.046582, -76.92863], 5);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([-12.062824, -77.0327])
        .addTo(map)
        .bindPopup("Lima <br> Perú")
        .openPopup();
    }
  },

  computed: {
    ...mapState(["infoPersonal", "breadItems"]),
    ...mapGetters(["newInfo"]),

    obtenerbread: function () {
      if (this.$route.path === "/contact") {
        this.newItem.push(this.breadItems[0]);
        this.newItem.push(this.breadItems[2]);
        return this.newItem;
      }
    },
  },

  methods: {},
};
</script>

<style>
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
.list-contac {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
}

#mapa {
  height: 42rem;
  border: 0.2rem solid #e1e1e1;
}
</style>