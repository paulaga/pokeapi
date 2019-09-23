<template>
  <ul>
    <li v-if="!pokemons.length">No hay pokemons que valgan!</li>
    <li v-for="(pokemon, index) in pokemons" :key="index">
      <pokemonList
        :id="+pokemon.id"
        :image="pokemon.image"
        :name="pokemon.name"
        :url="pokemon.url"
      />
    </li>
  </ul>
</template>

<script>
  import PokemonList from '@/components/PokemonList.vue'

  export default {
    name: 'Grid',
    components: {
      PokemonList
    },
    props: {
      pokemons: { type: Array, required: true }
    },
    methods: {
      onPokemonClick(payload) {
        this.$store.dispatch('setCurrentPokemon', payload)
        this.$router.push({name: 'pokemon-detail', params: payload})
      }
    }
  }
</script>

<style lang="scss">
  ul {
    font-family: 'Roboto', sans-serif;
    display: grid;
    width: 80%;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(9em, 1fr));
    grid-gap: 10px;
    text-align: center;
  }
  li {
    list-style: none;
  }
</style>