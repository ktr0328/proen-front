<template>
  <drag
    :transferData="data"
    @dragstart="dragstart"
    @dragend="dragend"
    class='component-block'
    :style="{ 'background-color': colorCode(data.color) }"
  >
    <span> {{ data.name }} </span>
  </drag>
</template>

<script>
import config from '@/config'
import { Drag, Drop } from 'vue-drag-drop'

export default {
  name: 'component-block',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    isWrapper () {
      return this.data.type !== 'expression' && this.isShowInput
    }
  },
  methods: {
    dragstart (ev) {
      const payload = {
        dragging: this.data,
        draggingElement: this.$el
      }
      this.$store.commit('question/dragStart', payload)
    },
    dragend (ev) {
      this.$store.commit('question/dragEnd')
    },
    colorCode (name) {
      return config.colorCodes[name]
    }
  },
  components: {
    Drag,
    Drop
  }
}
</script>

<style scoped lang="sass">
.component-block
  height: 30px
  width: 50%
  margin: 5px auto
  color: #fff
  vertical-align: middle
  padding: 5px
</style>
