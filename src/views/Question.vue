<template>
  <v-container fluid>
    <h1>Question</h1>
    <p>id: {{ question.id }}</p>
    <p>title: {{ question.title }}</p>
    <p>text: {{ question.text }}</p>
  </v-container>
</template>

<script>
import config from '@/config'

export default {
  name: 'question',
  mounted: function () {
    this.axios.get(`${config.api.base_url}/questions/${this.$route.params.id}`)
      .then(e => { this.question = e.data })
  },
  data () {
    return {
      question: {}
    }
  }
}
</script>

<style>

</style>
