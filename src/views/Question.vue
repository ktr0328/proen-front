<template>
  <v-container fluid style='padding: 0; height: 90%'>
    <v-toolbar dark>
      <v-toolbar-title>Question: {{ question.title }}</v-toolbar-title>
    </v-toolbar>

    <v-layout row wrap fill-height>
      <v-flex xs4>
        question
      </v-flex>
      <v-flex xs3>
        playground
      </v-flex>
      <v-flex xs5>
        components
      </v-flex>
    </v-layout>
    <v-footer absolute height="20%">
      bottom
    </v-footer>

    <!-- <v-content>
      <v-container fluid>
        {{ question.text }}
      </v-container>
    </v-content> -->
    <!-- <h1>Question</h1>
    <p>id: {{ question.id }}</p>
    <p>title: {{ question.title }}</p>
    <p>text: {{ question.text }}</p> -->
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
