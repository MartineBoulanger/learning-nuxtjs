<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex column>
        <h1>{{ title }}</h1>
        <p class="text-center">
          Just the about page for practicing the routing in Nuxt.js.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'AboutPage',
  layout: 'defaultLayout',
  middleware: 'test',
  asyncData() {
    return {
      title: 'About',
    }
  },
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My Amazing About Page',
        },
      ],
      script: [{ src: '/about.js' }],
    }
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 2rem;
}
</style>
