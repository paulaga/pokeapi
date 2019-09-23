<template>
  <ul>
    <li v-if="!pokemons.length">No hay pokemons que valgan!</li>
    <li v-for="(pokemon, index) in pokemons" :key="index">
      <pokemonList
        :id="+pokemon.id"
        :image="pokemon.image"
        :name="pokemon.name"
        @click.native="onPokemonClick(pokemon)"
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
    list-style: none;
    width: 80%;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0;
    img {
      width: 100px;
      height: auto;
    }
    .container {
      height: 100%;
      padding: 10px;
    }
    .name-wrapper {
      margin: 5px auto;
      padding: 8px 0;
      color: #FFF;
      background: rgba(44, 62, 80, 0.9);
      border-radius: 20px;
      cursor: pointer;
      &:hover {
        background: #FFF;
        color: rgba(44, 62, 80, 0.9);
        border-radius: 5px;
      }
    }
    .name {
      text-transform: uppercase;  
      font-weight: 800;
    }
    .data-wrapper {
      display: none;
    }
  }
  @media(max-width:678px){
    ul {
      grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
    }
  }
</style>