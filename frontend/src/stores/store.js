import { defineStore } from 'pinia'
//import axios from 'axios'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    cities: [],
  }),
  actions: {
    async fetchCities() {
      
      /*const response = await axios.get('http://localhost:3000/cities')
      this.cities = response.data.cities.map(city => ({
        ...city,
        population: parseInt(city.population),
      }))*/

      const response = await require('../../../city_population.json')
      this.cities = response.cities.map(city => ({
        ...city,
        population: parseInt(city.population),
      }))

    },
  },
})