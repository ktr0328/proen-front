<template>
  <v-container fluid>
    <h1>Question</h1>
    <p>id: {{ question.id }}</p>
    <p>title: {{ question.title }}</p>
    <p>text: {{ question.text }}</p>
  </v-container>
</template>

<script>
export default {
  name: 'question',
  mounted: function () {
    this.axios.get(`http://localhost:3000/questions/${this.$route.params.id}`)
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
