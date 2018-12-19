<template>
  <drag
    class='expression'
    :style='{ "background-color": colorCode(data.color) }'
    :transferData="data"
    @dragstart='dragStart'
  >
    <v-layout row v-if='data.name === "variable"'>
      <v-flex xs2>
        <span> {{ data.name }}</span>
      </v-flex>
      <v-flex xs4>
        <v-text-field dark placeholder='変数名' type='text' class='input' v-model='inputName' />
        <span class='none'>{{ inputName }} </span>
      </v-flex>
      <v-flex xs2>
        <v-select :items='operators'></v-select>
      </v-flex>
      <v-flex xs4>
        <v-text-field dark placeholder='値' type='text' v-model='inputValue'></v-text-field>
        <span class='none'>{{ inputValue }}; </span>
      </v-flex>
    </v-layout>

    <v-layout row v-if='data.name === "puts"'>
      <v-flex xs3>
        <span> {{ data.name }}</span>
      </v-flex>
      <v-flex xs9>
        <v-text-field dark placeholder='何か' type='text' v-model='inputValue' />
        <span class='none'>{{ inputValue }}; </span>
      </v-flex>
    </v-layout>
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
      inputName: '',
      inputValue: '',
      operators: config.components.operators.expression
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
  margin: 1px
  padding: 10px
  // input
  //   text-align: center
    // width: 100px
    // margin-left: 10px
    // border: 1px solid #888
    // color: #333
    // background-color: #fff
.none
  display: none
</style>
