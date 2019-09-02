import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      pokemons: [],
      currentPokemon: {}
    }
  },
  mutations: {
    setPokemons (state, payload) {
      state.pokemons = payload
    }
  },
  actions: {
    loadPokemons (context) {
      axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(res => {
          // eslint-disable-next-line no-console
          console.log('res: ' + res.data.results[0].name)
          context.commit('setPokemons', res.data.results.slice(0, 20))
        })
    }
  }
})