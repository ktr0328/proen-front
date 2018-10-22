import Vue from 'vue'
import Vuex from 'vuex'
import common from './vuex/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common
  }
})
