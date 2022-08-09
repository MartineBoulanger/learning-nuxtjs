<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card class="mt-4">
          <v-card-title class="d-flex justify-space-between">
            <h1 class="headline">All Questions</h1>
            <n-link to="/admin/questions/create" class="text-decoration-none">
              <v-btn small color="grey darken-1" dark>Add A Question</v-btn>
            </n-link>
          </v-card-title>
          <v-card-text class="mt-4">
            <v-data-table
              :headers="headers"
              :items="questions"
              :items-per-page="5"
              class="elevation-1"
              :single-select="true"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-arrow-left',
                nextIcon: 'mdi-arrow-right',
              }"
            >
              <template #:items="props">
                <td>{{ props.item.question }}</td>
                <td>{{ props.item.options.one }}</td>
                <td>{{ props.item.options.two }}</td>
                <td>{{ props.item.options.three }}</td>
                <td>{{ props.item.options.four }}</td>
              </template>
              <template #[`item.actions`]="props">
                <v-icon small @click="onDelete(props.item.id)"
                  >mdi-delete</v-icon
                >
                <n-link
                  :to="`/admin/questions/${props.item.id}`"
                  class="text-decoration-none"
                >
                  <v-icon small color="green">mdi-square-edit-outline</v-icon>
                </n-link>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import consola from 'consola'

export default {
  name: 'IndexQuestionsPage',
  layout: 'defaultLayout',
  middleware: 'auth',
  data() {
    return {
      headers: [
        {
          text: 'Question',
          value: 'question',
        },
        {
          text: 'Option One',
          value: 'options.one',
        },
        {
          text: 'Option Two',
          value: 'options.two',
        },
        {
          text: 'Option Three',
          value: 'options.three',
        },
        {
          text: 'Option Four',
          value: 'options.four',
        },
        {
          text: 'Actions',
          value: 'actions',
        },
      ],
      questions: [],
    }
  },
  created() {
    this.fetchQuestions()
  },
  methods: {
    fetchQuestions() {
      this.$axios
        .get(`/questions.json`)
        .then((res) => {
          Object.keys(res.data).map((key) => {
            consola.log({
              message: res.data[key],
              badge: true,
            })
            res.data[key].id = key
            return this.questions.push(res.data[key])
          })
        })
        .catch((err) => {
          consola.error({
            message: err.message,
            badge: true,
          })
        })
    },
    onDelete(id) {
      this.$axios
        .delete(`/questions/${id}.json`)
        .then(() => {
          this.getAnswer(id)
        })
        .catch((err) => consola.error({ message: err.message, badge: true }))
    },
    getAnswer(id) {
      this.$axios
        .get(`/answers.json?orderBy="question_id"&equalTo="${id}"`)
        .then((res) => {
          const answerId = Object.keys(res.data)[0]
          this.deleteAnswer(answerId, id)
        })
        .catch((err) => consola.error({ message: err.message, badge: true }))
    },
    deleteAnswer(answerId, id) {
      this.$axios
        .delete(`/answers/${answerId}.json`)
        .then(() => {
          this.questions = this.questions.filter((d) => d.id !== id)
        })
        .catch((err) => consola.error({ message: err.message, badge: true }))
    },
  },
}
</script>
