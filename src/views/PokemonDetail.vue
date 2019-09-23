<template>
  <div class="detail">
    <h1>{{pokemon.name}}</h1>
    <pokemonList
      :style="{'background': 'none'}"
      :image="pokemon.image"
      :experience="pokemon.experience" 
      :abilities="pokemon.abilities"/>
    <div class="back">
      <router-link to="/">Back home</router-link>
    </div>
  </div>
</template>

<script>
  import PokemonList from '@/components/PokemonList.vue'

  export default {
    name: 'PokemonDetail',
    components: {
      PokemonList
    },
    computed: {
      pokemon () {
        return this.$store.state.currentPokemon
      }
    }
  }
</script>

<style lang="scss">
  .detail {
    margin: 0 auto;
    h1 {
      text-transform: capitalize;
      padding: 20px;
      width: 50%;
      margin: 10px auto;
      border-bottom: 2px dotted #CCC;
    }
    img {
      width: 150px;
    }
    ul {
      display: inline;
      line-height: 2em;
    }
    .back {
      width: 150px;
      margin: 50px auto;
      padding: 10px 0;
      border-radius: 20px;
      background: #ededed;
      &:hover {
        background:#ccc;
      }
      a {
        color: #464646;
        text-decoration: none;
      }
    }
  }
</style>