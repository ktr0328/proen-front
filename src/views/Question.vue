<template>
  <v-container fluid style='padding: 0; height: 90%'>
    <v-toolbar dark>
      <v-toolbar-title>Question: {{ question.title }}</v-toolbar-title>
    </v-toolbar>

    <v-layout row wrap fill-height class="main-pane">
      <v-flex xs4>
        question text
      </v-flex>

      <v-flex xs3 id='playGround'>
        <drop style="width: 100%; height: 100%;"
          :class="{ over }"
          @drop.self="onDrop"
          @dragover="over = true"
          @dragleave="over = false"
        >
          <div v-for="(val, i) in playGround" :key="'key-' + i">
            <ComponentBlock
              :data="val"
              :isShowInput="true"
              @remove="removeComponent"
            />
          </div>
        </drop>
      </v-flex>

      <v-flex xs5 id='components'>
        <div v-for="(val, i) in components" :key="'key-' + i" >
          <ComponentBlock
            :data="val"
          />
        </div>
      </v-flex>
    </v-layout>

    <v-footer absolute height="20%">
      <v-btn color="primary" @click="handleTest">test</v-btn>
    </v-footer>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import config from '@/config'
import ComponentBlock from '@/components/playground/ComponentBlock.vue'
import { Drop } from 'vue-drag-drop'

export default {
  name: 'question',
  mounted: function () {
    this.$store.dispatch('questions/getOne', { id: this.$route.params.id })

    this.components = this.components.map(e => ({
      ...e,
      color: config.colors[e.name]
    }))
    console.log(this)
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
        { name: 'for', type: 'wrapper' },
        { name: 'while', type: 'wrapper' },
        { name: 'puts', type: 'expression' }
      ],
      playGround: [],
      over: false
    }
  },
  components: {
    Drop,
    ComponentBlock
  },
  methods: {
    addToPlayGrouond (val) {
      this.playGround.push({ name: val.name, type: val.type, color: val.color })
    },
    removeComponent (id) {
      this.playGround = this.playGround.filter(e => e._id !== id)
    },
    onDrop (data) {
      console.log(data)
      this.playGround.push(data)
    },
    handleTest (ev) {
      console.log('test')
      console.log(document.querySelector('#playGround').textContent)
      console.log(this.playGround)
    }
  }
}
</script>

<style lang="sass">
.dragArea
  height: 100%
.draggable-placeholder-inner
  display: flex
  align-items: center
  box-sizing: border-box
  padding: 0
  border: 1px dashed #0088F8
  background: rgba(0, 136, 249, 0.09)
  color: #0088f9
  text-align: center
.tree-node-inner
  cursor: pointer
.main-pane
  background: #eee
</style>
