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
      // eslint-disable-next-line no-console
      console.log('mutations- ' + Object.keys(payload[0]))
      state.pokemons = payload
    },
    setCurrentPokemon (state, payload) {
      state.currentPokemon = payload
    }
  },
  actions: {
    loadPokemons (context) {
      let pokemons = []
      axios.get(`https://pokeapi.co/api/v2/pokemon`)
        .then(res => {
          pokemons = res.data.results.slice(0, 20)
          pokemons.forEach(pokemon => {
            axios.get(pokemon.url).then(res => {
              pokemon.image = res.data.sprites.front_default
              pokemons.push(pokemon, pokemon.image)
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