<template>
  <drag
    class='expression'
    :style='{ "background-color": colorCode(data.color) }'
    :transferData="data"
    @dragstart='dragStart'
  >
    <span> {{ data.name }}</span>
    <input type='text'  v-model='input'>
    <span class='none'>{{ input }}; </span>
  </drag>
</template>

<script>
import { Drag } from 'vue-drag-drop'
import config from '@/config'

export default {
  name: 'expression',
  props: {
    data: {
      required: true
    }
  },
  data () {
    return {
      input: ''
    }
  },
  methods: {
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
    }
  },
  components: {
    Drag
  }
}
</script>

<style lang='sass' scoped>
.expression
  color: #fff
  min-height: 25px
  margin: 5px
  padding: auto 15px
  input
    width: 100px
    margin-left: 10px
    border: 1px solid #888
    color: #333
    background-color: #fff
    text-align: center
.none
  display: none
</style>
