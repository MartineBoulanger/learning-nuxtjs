import consola from 'consola'

export const state = () => ({
  city: 'Maastricht',
  weather: {},
})

export const mutations = {
  setCity(state, payload) {
    state.city = payload
  },
  setWeather(state, payload) {
    state.weather = payload
  },
}

export const actions = {
  getWeatherInfo(context, payload) {
    this.$axios
      .$get(
        `https://api.openweathermap.org/data/2.5/weather?q=${context.state.city}&appid=${process.env.WEATHER_APP_ID}`
      )
      .then((res) => {
        context.commit('setWeather', res)
        consola.log({
          message: res,
          badge: true,
        })
      })
      .catch((err) =>
        consola.error({
          message: err,
          badge: true,
        })
      )
  },
}
