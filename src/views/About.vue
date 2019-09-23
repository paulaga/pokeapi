<template>
  <grid
    :pokemons="$store.state.pokemons" />
</template>

<script>
  import Grid from '@/components/Grid.vue'

  export default {
    name: 'About',
    components: {
      Grid
    },
    // data () {
    //   return {
    //     pokemons: []
    //   }
    // },
    // mounted () {
    //   this.pokemons = []
    // }, 
    // beforeCreate () {
    //   console.log('before create call')
    //   this.$store.dispatch('loadPokemons')
    //   console.log(this.$store.state.pokemons)
    //   console.log('beforecreated: ' + this.$store.state.pokemons)
    // },

    created () {
      console.log('create call')
      if (!this.$store.state.pokemons.length) {
        this.$store.dispatch('loadPokemons')
      console.log('created: ' + this.$store.state.pokemons)
      }
    }
  }
</script>