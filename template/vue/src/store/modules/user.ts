let state = {
  info: {
    data: 'store data from user !!!',
    count: 0
  },
  auth: {}
}

const mutations = {
  info (state) {
    state.info.count++
  }
}

const actions = {}

const getters = {
  info: state => state.info
}

export default {
  state,
  mutations,
  actions,
  getters
}
