export default {
  namespaced: true,
  state: {
    dragging: '',
    draggingElement: ''
  },
  getters: {},
  mutations: {
    dragStart (state, payload) {
      state.dragging = payload.dragging
      state.draggingElement = payload.draggingElement
    },
    dragEnd (state) {
      state.dragging = ''
      state.draggingElement = ''
    }
  },
  actions: {
  }
}
