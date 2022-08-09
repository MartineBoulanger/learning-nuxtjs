<template>
  <v-app>
    <no-ssr>
      <notifications group="notify" />
    </no-ssr>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense color="#333" dark>
        <v-toolbar-title class="ml-4">
          <n-link to="/">Learning Nuxt.js</n-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn depressed color="#333" height="100%" tile>
          <n-link to="/about"> About </n-link>
        </v-btn>

        <v-btn depressed color="#333" height="100%" tile>
          <n-link to="/inspire"> Inspire </n-link>
        </v-btn>

        <v-btn depressed color="#333" height="100%" tile>
          <n-link to="/weather-app"> Weather App </n-link>
        </v-btn>

        <v-btn depressed color="#333" height="100%" tile>
          <n-link to="/quiz"> Quiz App </n-link>
        </v-btn>

        <v-btn
          v-if="$auth()"
          depressed
          color="#333"
          height="100%"
          tile
          @click="logout"
        >
          Logout
        </v-btn>

        <v-btn
          v-if="!$auth()"
          depressed
          color="#333"
          height="100%"
          tile
          @click="login"
        >
          Login
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  methods: {
    logout() {
      this.$cookies.remove('token')
      this.$store.commit('auth/setLoggedIn', false)
      this.$router.push('/quiz')
    },
    login() {
      this.$router.push('/admin/login')
    },
  },
}
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
  font-weight: 700;
}
</style>
