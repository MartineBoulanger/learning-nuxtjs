<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card class="mt-4">
          <v-card-title>
            <h1 class="display-1">Admin Login</h1>
          </v-card-title>
          <v-card-text class="mt-4">
            <v-flex xs12>
              <v-text-field
                v-model="email"
                label="email"
                type="email"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="password"
                type="password"
                outlined
              ></v-text-field>
              <v-btn class="grey lighten-1" small @click="login()">Login</v-btn>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'defaultLayout',
  middleware: 'guest',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$axios
        .$post(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.DATABASE_KEY}`,
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          this.handleToken(res.idToken)
        })
      this.$store.commit('auth/setLoggedIn', true)
    },
    handleToken(token) {
      this.$cookies.set('token', token)
      this.$router.push('/admin/questions')
    },
  },
}
</script>
