<template>
  <v-card class="mt-4">
    <v-card-title class="green darken-2 white--text">
      <h1 class="headline">{{ item.question }}</h1>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-radio-group v-model="chosenOption" row>
          <v-radio
            v-for="(option, index) in item.options"
            :key="index"
            :label="option"
            :value="option"
            :color="answerColor()"
          ></v-radio>
        </v-radio-group>
        <v-layout>
          <v-btn class="teal darken-2" small dark @click="handleAnswer"
            >Submit</v-btn
          >
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import consola from 'consola'

export default {
  name: 'QuestionComponent',
  props: {
    item: { type: Object, default: () => {} },
    id: { type: String, default: '' },
  },
  data() {
    return {
      chosenOption: '',
      result: null,
    }
  },
  methods: {
    handleAnswer() {
      this.$axios
        .get(`/answers.json?orderBy="question_id"&equalTo="${this.id}"`)
        .then((res) => {
          const answer = Object.values(res.data)[0].answer
          this.verifyAnswer(answer)
        })
        .catch((err) => {
          consola.error({
            message: err.message,
            badge: true,
          })
        })
    },
    verifyAnswer(answer) {
      this.result = answer === this.chosenOption
      if (this.result) {
        this.$notify({
          group: 'notify',
          title: 'Correct!',
          text: 'Your answer is correct!',
        })
      }
      if (!this.result) {
        this.$notify({
          group: 'notify',
          title: 'Wrong!',
          text: 'Your answer is wrong! Try again.',
        })
      }
    },
    answerColor() {
      if (this.result === null) return 'black'
      return this.result ? 'green' : 'red'
    },
  },
}
</script>
