<template>
  <drag
    class='wrapper'
    :style='{ "background-color": colorCode(data.color) }'
    :transferData="data"
    @dragstart='dragStart'
  >
    <v-layout>
      <v-flex xs2>
        <span>{{ data.name }}</span>
      </v-flex>
      <v-flex xs4
        v-if='data.name !== "else"'
      >
        <v-text-field
          dark type='text' v-model='inputName'
          placeholder="何か"
        />
        <span class='none'> {{ inputName }} </span>
      </v-flex>
      <v-flex xs2
        v-if='data.name !== "else"'
      >
        <v-select :items='operators[data.name]'></v-select>
      </v-flex>
      <v-flex xs4
        v-if='data.name !== "else"'
      >
        <v-text-field
          dark type='text' v-model='inputValue'
          placeholder="何か"
        />
        <span class='none'> {{ inputValue }} ; </span>
      </v-flex>
    </v-layout>

    <drop class='inner' @drop='onDropInner'>
      <div v-for='(v, i) in children' :key='"key" + i'>
        <expression
          :data='v' v-if='v.type === "expression"'
          class='component'
        />
        <wrapper
          :data='v' v-if='v.type === "wrapper"'
          class='component'
        />
      </div>
    </drop>
    <span class='none' v-if='noEnd(data.name)'> end; </span>
  </drag>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop'
import config from '@/config'
import Expression from '@/components/playground/Expression.vue'
import Wrapper from '@/components/playground/Wrapper.vue'

export default {
  name: 'wrapper',
  props: {
    data: {
      required: true
    }
  },
  data () {
    return {
      inputName: '',
      inputValue: '',
      children: [],
      operators: {
        for: config.components.operators.for,
        while: config.components.operators.while,
        if: config.components.operators.if,
        elsif: config.components.operators.elsif
      }
    }
  },
  methods: {
    onDropInner (data, ev) {
      ev.stopPropagation()
      const target = this.$store.state.question.draggingElement
      if (!target.classList.contains('component-block')) { target.parentNode.removeChild(target) }

      this.children.push(data)
    },
    dragStart (data, ev) {
      ev.stopPropagation()
      const payload = {
        dragging: data,
        draggingElement: this.$el
      }
      this.$store.commit('question/dragStart', payload)
    },
    colorCode (name) {
      return config.colorCodes[name]
    },
    noEnd (name) {
      return !['elsif', 'else'].includes(name)
    }
  },
  components: {
    Drag,
    Drop,
    Expression,
    Wrapper
  }
}
</script>

<style lang='sass' scoped>
.wrapper
  min-height: 50px
  padding: 10px
  margin: 10px 5px
  color: #fff
  input
    width: 100px
    margin-left: 10px
    border: 1px solid #888
    color: #333
    background-color: #fff
    text-align: center
  .inner
    padding-bottom: 30px
    min-height: 100px
    height: 80%
    width: 100%
    margin-left: 10px
.none
  display: none
</style>
