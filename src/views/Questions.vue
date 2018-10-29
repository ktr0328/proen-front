<template>
  <v-container fluid>
    <h1>questions</h1>
    <v-layout row wrap>
      <v-flex xs6 v-for='(d, i) in questions' :key='"key" + i'>
        <v-hover>
          <v-card slot-scope='{ hover }' class='card'>
            <v-card-title primary-title>
              <div>
                <h3>{{ d.title }}</h3>
                <div>{{ shortText(d.text) }}</div>
              </div>
            </v-card-title>
            <v-expand-transition>
              <router-link
                v-if="hover"
                class="link d-flex transition-fast-in-fast-out grey darken-2 v-card--reveal white--text"
                style="height: 100%;"
                :to='"/questions/" + d.id'
                tag='div'
              >
                {{ d.text }}
              </router-link>
            </v-expand-transition>
            <v-card-actions>
              <v-chip
                v-for='comp in d.components' :key='"key" + comp'
                class='component' :color='getComponentColor(comp)'>{{ comp }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import config from '@/config'

export default {
  name: 'home',
  mounted: function () {
    this.axios
      .get(`${config.api.base_url}/questions`)
      .then(e => { this.questions = e.data })
  },
  methods: {
    shortText (text) {
      return text.substring(0, 25)
    },
    getComponentColor (name) {
      return this.colors[name]
    }
  },
  data () {
    return {
      questions: [],
      colors: config.colors
    }
  }
}
</script>

<style scoped lang='sass'>
.card
  margin: 30px
.v-card--reveal
  align-items: center
  bottom: 0
  justify-content: center
  opacity: .9
  position: absolute
  width: 100%
  padding: 10px
.link
  cursor: pointer
.component
  margin: 0 5px
</style>
