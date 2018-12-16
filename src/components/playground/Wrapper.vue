<template>
  <drag
    class='wrapper'
    :style='{ "background-color": colorCode(data.color) }'
    :transferData="data"
    @dragstart='dragStart'
  >
    <span>{{ data.name }}</span>
    <input type='text' v-if='data.name !== "else"' v-model='input'>
    <span class='none'> {{ input }} </span>
    <span class='none'> ; </span>
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
      input: '',
      children: []
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
  margin: 5px
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
    width: 80%
    margin-left: 10px
.none
  display: none
</style>
