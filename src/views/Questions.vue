<template>
  <v-container fluid>
    <h1>questions</h1>
    <v-toolbar
      dense
      floating
      flat
    >
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
        v-model='search'
      ></v-text-field>
    </v-toolbar>
    <v-layout row wrap>
      <v-flex xs6 v-for='(d, i) in filteredQuestions' :key='"key" + i'>
        <v-hover>
          <v-card
            slot-scope='{ hover }' class='card white--text'
            color='blue-grey darken-2'
          >
            <v-card-title primary-title>
              <h3>{{ d.title }}</h3>
            </v-card-title>
            <v-card-text style='height: 100px'>
              <div>{{ shortText(d.content) }}</div>
            </v-card-text>
            <v-expand-transition>
              <router-link
                v-if="hover"
                class="link d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal white--text"
                style="height: 100%;"
                :to='"/questions/" + d.id'
                tag='div'
              >
                {{ d.content }}
              </router-link>
            </v-expand-transition>
            <v-divider></v-divider>
            <v-card-actions class='tags'>
              <v-chip
                v-for='c in d.components' :key='"key" + c'
                class='component' :color='getComponentColor(c)'>{{ c }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <!-- <InfiniteLoading @infinite='infiniteHandler'/> -->
  </v-container>
</template>

<script>
import config from '@/config'
import { mapState } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'home',
  mounted: function () {
    this.$store.dispatch('questions/getMany')
  },
  methods: {
    shortText (text) {
      return text.substring(0, 25)
    },
    getComponentColor (name) {
      return this.colors[name]
    },
    async infiniteHandler ($state) {
      const response = await this.$store.dispatch('questions/getMany')
      if (!response.length) {
        $state.complete()
      } else {
        $state.loaded()
      }
    }
  },
  computed: {
    ...mapState({
      questions: state => state.questions.all
    }),
    filteredQuestions () {
      return this.questions.filter(e => e.title.includes(this.search))
    }
  },
  data () {
    return {
      colors: config.colors,
      search: ''
    }
  },
  components: {
    InfiniteLoading
  }
}
</script>

<style scoped lang='sass'>
.card
  margin: 5%
.v-card--reveal
  align-items: center
  bottom: 0
  justify-content: center
  opacity: .9
  position: absolute
  width: 100%
  padding: 10px
  overflow: scroll
.component
  margin: 0 5px
.tags
  overflow: scroll
</style>
