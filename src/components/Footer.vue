<template>
  <v-footer color="footer" id="footer">
    <v-container>
      <v-layout row wrap white--text justify-space-between my-5 pt-5>
        <v-flex xs12 sm12 md3 px-2>
          <h3 subtitle-2 class="title-footer font-weight-bold footerTitle--text">About</h3>
          <p class="font-weight-light footerText--text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            quod dolores, itaque laudantium explicabo.
          </p>
        </v-flex>
        <v-flex xs12 sm12 md3 px-2>
          <h3 subtitle-2 class="title-footer font-weight-bold  footerTitle--text">Menu</h3>
          <div class="nav-footer ">
            <router-link to="/" class="footer-link">Home</router-link>
            <router-link to="/about" class="footer-link">About</router-link>
            <router-link to="/services" class="footer-link">Services</router-link>
            <router-link to="/work" class="footer-link">Work</router-link>
            <router-link to="/contact" class="footer-link">Contact</router-link>
          </div>
        </v-flex>
        <v-flex xs12 sm12 md3 px-2>
          <h3 subtitle-2 class="title-footer font-weight-bold  footerTitle--text">Contact</h3>
          <ul class="contac-footer">
            <li v-for="(info, index, key) in newInfo" :key="key"
            class="element-contact footerText--text">
              <strong>{{ index }}:</strong> {{ info }}
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid ma-0 pa-0 >
      <div class="copy-right footerText--text">
        &copy;2021 — <strong>Daniitoo</strong>
      </div>
    </v-container>
  </v-footer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["newInfo"]),
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
}
.menu-footer {
  display: grid;
  grid-template-columns: repeat (2, 1fr);
  column-gap: 10px;
}
.contac-footer{
  list-style: none;
  padding: 0!important;
}
.element-contact{
  margin-bottom: 2px;
}
.element-contact:nth-of-type(2n){
  padding-top: 20px;
}

.nav-footer{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.footer-link{
   text-decoration: none;
   margin-bottom: 20px;
}

.footer-link:hover{
  color: #fff;
}

.title-footer{
  font-size: .95rem!important;
  font-weight: 500;
  letter-spacing: .1666666667em;
  line-height: 2rem;
  text-transform: uppercase;
  font-family: rRoboto,sans-serif;
  margin-bottom: 30px;
}

.copy-right{
  padding: 15px 0;
  color: #fff;
  text-align: center;
  border-top: 1px solid rgba(136,136,136,.15);
}
</style>