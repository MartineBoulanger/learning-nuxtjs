<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs10 sm5 lg3>
        <h1 class="mt-4 mb-8 display-2 text-center">Weather App</h1>
        <v-form @submit.prevent="getWeatherInfo">
          <v-text-field v-model="city" label="Search City" solo></v-text-field>
        </v-form>
        <v-card
          elevation="4"
          shaped
          color="blue-grey darken-2 ma-auto"
          dark
          max-width="350px"
          class="d-flex flex-column"
        >
          <v-card-text>
            <v-flex>
              <div class="d-flex justify-space-between">
                <h1 class="display-1 font-weight-medium">
                  {{ weather.name }}
                  <span class="caption">({{ country }})</span>
                </h1>
                <img
                  class="weather-icon light-blue lighten-3 rounded-circle"
                  :src="icon"
                  :alt="description"
                />
              </div>
              <div class="d-flex justify-space-between align-center">
                <span class="display-3 font-weight-bold"
                  >{{ temp() }}&deg;C</span
                >
                <span class="caption ml-4">{{ description }}</span>
              </div>
              <v-card
                class="d-flex flex-column mt-4 pa-3 light-blue lighten-3 info-box"
                light
              >
                <span class="mb-2 font-weight-medium text-uppercase pink--text"
                  >Feels like {{ feelsLike() }}&deg;C</span
                >
                <hr />
                <span class="mt-2"
                  >Wind: {{ windSpeed }} m/s ({{ windDeg }}&deg;)</span
                >
                <span>Visibility: {{ visibility() }} km</span>
                <span>Humitidy: {{ humidity }} %</span>
                <span>Clouds: {{ clouds }} %</span>
                <span class="mb-2">Pressure: {{ pressure }} hPa</span>
                <hr />
                <span class="mt-2">Min. Temp: {{ minTemp() }}&deg;C</span>
                <span>Max. Temp: {{ maxTemp() }}&deg;C</span>
              </v-card>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WeatherAppPage',
  layout: 'defaultLayout',
  //   fetch() is for SSR fetching data globally
  fetch({ store }) {
    return store.dispatch('weather/getWeatherInfo')
  },
  //   asyncData() is for SSR fetching data locally
  //   data() is for state management locally
  //   computed is for loading properties locally before the page has been loaded.
  computed: {
    // instead of making a function like weather()
    // you also can use the mapState function from Vuex
    // don't forget to import mapState first
    //   weather() {
    //     return this.$store.state.weather.weather
    //   },
    ...mapState('weather', ['weather']),
    city: {
      get() {
        return this.$store.state.weather.city
      },
      set(value) {
        this.$store.commit('weather/setCity', value)
      },
    },
    icon() {
      return this.weather.weather
        ? `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`
        : ''
    },
    description() {
      return this.weather.weather ? this.weather.weather[0].description : ''
    },
    country() {
      return this.weather.sys ? this.weather.sys.country : ''
    },
    windSpeed() {
      return this.weather.wind ? this.weather.wind.speed : ''
    },
    windDeg() {
      return this.weather.wind ? this.weather.wind.deg : ''
    },
    humidity() {
      return this.weather.main ? this.weather.main.humidity : ''
    },
    pressure() {
      return this.weather.main ? this.weather.main.pressure : ''
    },
    clouds() {
      return this.weather.clouds ? this.weather.clouds.all : ''
    },
  },
  //   created() is for calling the actions that fetch data from the store or external
  created() {
    this.getWeatherInfo()
  },
  //   methods is for writing logic and actions
  methods: {
    getWeatherInfo() {
      this.$store.dispatch('weather/getWeatherInfo')
    },
    temp() {
      return this.weather.main ? (this.weather.main.temp - 273).toFixed(1) : ''
    },
    feelsLike() {
      return this.weather.main
        ? (this.weather.main.feels_like - 273).toFixed(1)
        : ''
    },
    minTemp() {
      return this.weather.main
        ? (this.weather.main.temp_min - 273).toFixed(1)
        : ''
    },
    maxTemp() {
      return this.weather.main
        ? (this.weather.main.temp_max - 273).toFixed(1)
        : ''
    },
    visibility() {
      return this.weather ? Math.round(this.weather.visibility / 1000) : ''
    },
  },
}
</script>

<style scoped>
.weather-icon {
  padding: 10px;
}

.info-box {
  width: 100%;
}
</style>
