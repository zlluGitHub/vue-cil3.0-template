import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flowData: {
      offsetX: -3000,
      offsetY: -3000,
      nodes: [],
      links: []
    },
    flowMenuObj: { type: 'drag-drop' },
    newNode: {
      state: false,
      node: {}
    }
  },
  mutations: {
    setFlowData(state, data) {
      if (data.method && (data.node || data.link)) {
        if (data.method === "add-node") {
          state.flowData.nodes.push(data.node)
        } else if (data.method === "delete-node") {
          let nodes = state.flowData.nodes.filter(node => data.node.id !== node.id)
          let links = state.flowData.links.filter(link => {
            if (link.sourceId === data.node.id || link.targetId === data.node.id) {
              return false
            }
            return true
          });
          state.flowData = { ...state.flowData, ...{ nodes, links } };
        } else if (data.method === "add-link") {
          state.flowData.links.push(data.link);
        } else if (data.method === "delete-link") {
          state.flowData.links = state.flowData.links.filter(item => {
            if (((item.sourceId === data.link.sourceId) && (item.targetId === data.link.targetId)) || ((item.sourceId === data.link.targetId) && (item.targetId === data.link.sourceId))) {
              return false
            }
            return true;
          })
        }
      } else {
        state.flowData = { ...state.flowData, ...data };
      }

    },
    setFlowMenuObj(state, data) {
      state.flowMenuObj = data;
    },
    setNewNode(state, data) {
      if (data.state) {
        state.newNode.state = data.state;
      } else {
        state.newNode.state = false
      }
      if (data.node) {
        state.newNode.node = data.node;
      }
    },
  },
  actions: {
  },
  modules: {
  }
})
