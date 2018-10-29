import Vue from 'vue'
import Vuex from 'vuex'
import common from '@/vuex/index'
import questions from '@/vuex/questions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    questions
  }
})
