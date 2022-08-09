<template>
  <v-layout justify-center align-center column>
    <v-flex xs12 sm6 md6>
      <v-card class="pa-8 rounded-xl" light elevation="24" min-height="225px">
        <h1 v-if="error.statusCode === 404">
          {{ pageNotFound }}
        </h1>
        <h1 v-else>
          {{ otherError }}
        </h1>
        <p class="py-4">{{ error.message }}.</p>
        <v-card-actions class="float-right">
          <v-btn icon depressed link to="/">
            <v-icon color="blue">mdi-arrow-left</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'emptyLayout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An Error Occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>
