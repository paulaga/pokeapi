<template>
  <grid
    :pokemons="$store.state.pokemons" />
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
