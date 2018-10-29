import config from '@/config'

export default {
  namespaced: true,
  state: {
    page: 1,
    all: [],
    selecting: {}
  },
  getters: {},
  mutations: {
    getQuestions (state, payload) {
      state.all = state.all.concat(payload.questions)
    },
    getOneQuestion (state, payload) {
      state.selecting = payload.question
    }
  },
  actions: {
    async getMany ({ state, commit }) {
      const params = { params: { _page: state.page } }
      const response = await this._vm.axios.get(`${config.api.base_url}/questions`, params)
      state.page = state.page + 1
      const payload = { questions: response.data }
      commit('getQuestions', payload)

      return payload.questions
    },
    async getOne ({ state, commit }, payload) {
      const response = await this._vm.axios.get(`${config.api.base_url}/questions/${payload.id}`)
      const data = { question: response.data }
      commit('getOneQuestion', data)
      return data
    }
  }
}
