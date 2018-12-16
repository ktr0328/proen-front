<template>
  <v-container fluid style='padding: 0; height: 90%'>
    <v-toolbar dark>
      <v-toolbar-title>Question: {{ question.title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color='primary' @click='runCode'>run</v-btn>
      <v-btn color='warning' @click='clearComponents'>clear</v-btn>
    </v-toolbar>

    <v-layout row wrap fill-height class="main-pane">
      <v-flex xs4 class='stripe panes'>
        <h3 style='margin: 10px'> {{ question.content }} </h3>
      </v-flex>

      <v-flex xs4 id='playGround' class='panes'>
        <drop style="width: 100%; height: 100%;"
          :class="{ over }"
          @drop.self="onDrop"
          @dragover="over = true"
          @dragleave="over = false"
        >
          <div v-for="(val, i) in playGround" :key="'key-' + i">
            <Wrapper
              v-if='val.type === "wrapper"'
              :data='val'
              class='component'
            />
            <Expression
              v-if='val.type === "expression"'
              :data='val'
              class='component'
            />
          </div>
        </drop>
      </v-flex>

      <v-flex xs4 id='components' class='stripe panes'>
        <drop
          style='width: 100%; height: 100%'
          @drop.self='onDropDelete'
        >
          <div v-for="(val, i) in components" :key="'key-' + i" >
            <ComponentBlock
              :data="val"
              class='component'
            />
          </div>
        </drop>
      </v-flex>
    </v-layout>

    <v-footer absolute height="20%">
      <v-textarea box label='Result' readonly v-model='result' :hint='latest'></v-textarea>
    </v-footer>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'
import config from '@/config'
import ComponentBlock from '@/components/playground/ComponentBlock.vue'
import Wrapper from '@/components/playground/Wrapper.vue'
import Expression from '@/components/playground/Expression.vue'
import { Drop } from 'vue-drag-drop'

export default {
  name: 'question',
  mounted: function () {
    this.$store.dispatch('questions/getOne', { id: this.$route.params.id })

    this.components = this.components.map(e => ({
      ...e,
      color: config.colors[e.name]
    }))
  },
  computed: mapState({
    question: state => state.questions.selecting,
    contents: () => document.querySelector('#playGround').textContent
  }),
  data () {
    return {
      components: [
        { name: 'variable', type: 'expression' },
        { name: 'if', type: 'wrapper' },
        { name: 'elsif', type: 'wrapper' },
        { name: 'else', type: 'wrapper' },
        { name: 'for', type: 'wrapper' },
        { name: 'while', type: 'wrapper' },
        { name: 'puts', type: 'expression' }
      ],
      playGround: [],
      over: false,
      result: '',
      latest: ''
    }
  },
  components: {
    Drop,
    ComponentBlock,
    Wrapper,
    Expression
  },
  methods: {
    removeComponent (id) {
      this.playGround = this.playGround.filter(e => e._id !== id)
    },
    onDrop (data, ev) {
      const target = this.$store.state.question.draggingElement
      if (!target.classList.contains('component-block')) {
        target.parentNode.removeChild(target)
      }

      this.playGround.push(data)
    },
    clearComponents (ev) {
      this.playGround = []
      this.result = ''
      this.latest = ''
    },
    onDropDelete (ev) {
      const target = this.$store.state.question.draggingElement
      if (!target.classList.contains('component-block')) {
        target.parentNode.removeChild(target)
      }
    },
    runCode (ev) {
      let result = document.querySelector('#playGround').textContent
      result = result.replace(/\svariable/g, ' ')
      result = result.replace(/\sputs/g, ' puts ')
      this.result = result
      this.latest = 'last modified @' + moment().format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style lang="sass">
#playGround
  height: 80%
.main-pane
  font-size: 1.3em
  .panes
    overflow: scroll
.component
  border-radius: 5px
  padding: auto 15px
.stripe
  background-color: #f5f5f5
</style>
