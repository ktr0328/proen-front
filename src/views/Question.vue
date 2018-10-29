<template>
  <v-container fluid>
    <h1>Question</h1>
    <p>id: {{ question.id }}</p>
    <p>title: {{ question.title }}</p>
    <p>text: {{ question.text }}</p>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'question',
  mounted: function () {
    this.$store.dispatch('questions/getOne', { id: this.$route.params.id })
  },
  computed: mapState({
    question: state => state.questions.selecting
  }),
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
