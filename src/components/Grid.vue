<template>
  <ul>
    <li v-if="!pokemons.length">No hay pokemos que valgan!</li>
    <li v-for="(pokemon, index) in pokemons" :key="index">
      <Pokemon
        :id="+pokemon.id"
        :name="pokemon.name"
      />
    </li>
  </ul>
</template>

<script>
  import Pokemon from '@/components/Pokemon.vue'

  export default {
    name: 'Grid',
    components: {
      Pokemon
    },
    props: {
      pokemons: { type: Array, required: true }
    }
  }
</script>