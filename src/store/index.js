import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flowData: {},
    flowMenuObj: { type: 'drag-drop' },
  },
  mutations: {
    setFlowData(state, data) {
      state.flowData = data;
    },
    setFlowMenuObj(state, data) {
      state.flowMenuObj = data;
    },
  },
  actions: {
  },
  modules: {
  }
})
