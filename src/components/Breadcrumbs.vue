<template>
  <div class="text-center asd">
    <v-breadcrumbs :items="items" class="prueba">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
    </v-breadcrumbs>
    <h1 class="display-2 font-weight-medium mt-5">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'bradcrumbs',
  props: {title: String, items: Array},
  data() {
    return {
      // items: [
      //   {
      //     text: "Home",
      //     disabled: false,
      //     href: "/",
      //   },
      //   {
      //     text: "About Me",
      //     disabled: true,
      //     href: "/about",
      //   },
      // ],
    }
  },
}
</script>

<style scoped>
  .prueba {
    align-items: center;
    display: block;
    font-weight: bold;
  }

  .asd {
    min-height: auto;
    padding-top: 20vh;
  }
</style>