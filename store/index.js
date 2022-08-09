export const state = () => ({
  course: 'Nuxt.js for everybody',
})

export const mutations = {
  setCourse(state, payload) {
    state.course = payload
  },
}

export const getters = {
  upperCaseCourse(state, getter) {
    return state.course.toUpperCase()
  },
}

export const actions = {
  nuxtServerInit({ commit }, { app: { $cookies } }) {
    if ($cookies.get('token')) {
      commit('auth/setLoggedIn', true)
    }
  },
}
