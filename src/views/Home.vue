<template>
  <div>
    <h1>PokeApi</h1>
    <grid
      :pokemons="$store.state.pokemons" />
  </div>
</template>

<script>
  import Grid from '@/components/Grid.vue'

  export default {
    name: 'Home',
    components: {
      Grid
    },
    created () {
      if (!this.$store.state.pokemons.length) {
        this.$store.dispatch('loadPokemons')
      }
    }
  }
</script>
