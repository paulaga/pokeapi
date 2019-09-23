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
    },
    setCurrentPokemon (state, payload) {
      state.currentPokemon = payload
    }
  },
  actions: {
    loadPokemons (context) {
      const pokemons = []
      axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then(res => {
        let items = res.data.results.slice(0, 20)
        items.forEach(pokemon => {
          axios.get(pokemon.url).then(res => {
            pokemon.image = res.data.sprites.front_default
            pokemons.push(pokemon)
          })
        })
      })
      .then(() => context.commit('setPokemons', pokemons))
    },
    setCurrentPokemon (context, payload) {
      context.commit('setCurrentPokemon', payload)
    }
  }
})