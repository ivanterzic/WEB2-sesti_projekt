import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    cities: []
  }),
  actions: {
    async fetchCities() {
      axios.get('http://localhost:3000/cities')
      .then(response => {
        this.cities = response.data.cities;
        for (let i = 0; i < this.cities.length; i++) {
          this.cities[i].population = parseInt(this.cities[i].population);
        }
      });
    }
  }
})