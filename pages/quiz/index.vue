<template>
  <v-container>
    <v-layout>
      <v-flex justify-center class="mt-4 mb-6">
        <h1 class="display-1">Quiz App</h1>
        <Question
          v-for="(item, idx) in questions"
          :id="idx"
          :key="idx"
          :item="item"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Question from '../../components/Question.vue'

export default {
  name: 'QuizPageIndex',
  components: { Question },
  layout: 'defaultLayout',
  data() {
    return {
      questions: {},
    }
  },
  created() {
    this.getQuestions()
  },
  methods: {
    getQuestions() {
      this.$axios
        .get(`/questions.json`)
        .then((res) => (this.questions = res.data))
    },
  },
}
</script>
