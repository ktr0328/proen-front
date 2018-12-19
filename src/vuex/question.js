// import config from '@/config'

export default {
  namespaced: true,
  state: {
    dragging: '',
    draggingElement: '',
    dialog: false
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
    },
    openDialog (state) {
      state.dialog = true
    }
  },
  actions: {
    async sendCode (state, payload) {
      // const response = this._$vm.axios.post(`${config.api.base_url}/question/answer/${payload.id}`, payload)
      const response = {
        data: {
          text: 'result text '.repeat(10),
          isCorrect: true
        }
      }
      console.log(response.data)
      return response.data
    }
  }
}
