<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm6 md4>
      <h1 class="text-center display-2 mt-6">{{ course }}</h1>
      <v-form class="mt-6">
        <v-text-field v-model="course" solo></v-text-field>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    course: {
      get() {
        return this.$store.getters.upperCaseCourse
      },
      set(value) {
        this.$store.commit('setCourse', value)
      },
    },
  },
}
</script>
