<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs8>
        <v-card class="mt-4">
          <v-card-title class="d-flex justify-space-between">
            <h1 class="headline">Add A Question</h1>
            <n-link to="/admin/questions" class="text-decoration-none">
              <v-btn small color="grey darken-1" dark>All Questions</v-btn>
            </n-link>
          </v-card-title>
          <v-card-text class="mt-4">
            <v-form @submit.prevent="store">
              <v-text-field
                v-model="quiz.question"
                label="Question"
                hint="Make it good, but not easy."
                outlined
              ></v-text-field>
              <v-text-field
                v-model="quiz.options.one"
                label="Option 1"
                hint="A possible correct answer to the question."
                outlined
              ></v-text-field>
              <v-text-field
                v-model="quiz.options.two"
                label="Option 2"
                hint="A possible correct answer to the question."
                outlined
              ></v-text-field>
              <v-text-field
                v-model="quiz.options.three"
                label="Option 3"
                hint="A possible correct answer to the question."
                outlined
              ></v-text-field>
              <v-text-field
                v-model="quiz.options.four"
                label="Option 4"
                hint="A possible correct answer to the question."
                outlined
              ></v-text-field>
              <v-card-title>
                <h1 class="headline">Choose the correct answer</h1>
              </v-card-title>
              <v-radio-group v-model="correct" :mandatory="false" row>
                <v-radio
                  v-for="option in quiz.options"
                  :key="option"
                  :label="option"
                  :value="option"
                  class="ml-4"
                ></v-radio>
              </v-radio-group>
              <v-btn class="grey lighten-1" small type="submit" block
                >Add Question</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import consola from 'consola'

export default {
  name: 'CreateQuestionsPage',
  layout: 'defaultLayout',
  middleware: 'auth',
  data() {
    return {
      quiz: {
        question: '',
        options: {
          one: '',
          two: '',
          three: '',
          four: '',
        },
      },
      correct: '',
    }
  },
  methods: {
    store() {
      this.$axios
        .post(`/questions.json`, this.quiz)
        .then((res) => {
          this.storeAnswer(res.data.name)
        })
        .catch((err) => consola.error({ message: err.message, badge: true }))
    },
    storeAnswer(id) {
      this.$axios
        .post(`/answers.json`, {
          question_id: id,
          answer: this.correct,
        })
        .then((res) => {
          this.$router.push('/admin/questions')
        })
        .catch((err) => consola.error({ message: err.message, badge: true }))
    },
  },
}
</script>
