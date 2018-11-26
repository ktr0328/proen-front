<template>
  <drag
    :transferData="data"
    :class="{ 'wrapper': isWrapper }"
  >
    <drop @drop='onDropInner' style="height: 100%">
      <v-chip
        class="white--text component-block"
        :color="data.color"
        :label="isWrapper"
        @click.left="LeftClick"
        @dblclick.prevent="RightClick"
        @dragstart="dragstart"
        @dragend="dragend"
      >
        <span>
          {{ data.name }}
        </span>
        <input type='text' v-if="this.isShowInput" v-model='input'>
        <span class='none'> {{ input }} </span>
        <div v-if='isWrapper'>
          <span class='none'> do </span>
          <div id='inner'> inner </div>
          <span class='none'> end </span>
        </div>
      </v-chip>
    </drop>
  </drag>
</template>

<script>
import { Drag, Drop } from 'vue-drag-drop'

export default {
  name: 'component-block',
  props: {
    data: {
      type: Object,
      required: true
    },
    isShowInput: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      input: ''
    }
  },
  computed: {
    isWrapper () {
      return this.data.type !== 'expression' && this.isShowInput
    }
  },
  methods: {
    LeftClick () {
      this.$emit('add')
    },
    RightClick () {
      this.$emit('remove', this.data._id)
    },
    dragstart (ev) {},
    dragend (ev) {},
    onDropInner (data, ev) {
      ev.stopPropagation()
      document.querySelector('#inner').innerHTML = ev.target.innerHTML
    }
  },
  components: {
    Drag,
    Drop
  }
}
</script>

<style scoped lang="sass">
input
  width: 50px
  margin-left: 10px
  border: 1px solid #888
  color: #333
  background-color: #fff
  text-align: center
.component-block
  height: 100%
.wrapper
  height: 150px
  min-height: 150px
.none
  display: none
</style>
