<template>
  <div class="home">
    <p>la home</p>
  </div>
</template>

<script>
import Grid from '@/components/Grid.vue'

export default {
  name: 'home',
  components: {
    Grid
  },
  data () {
    return {
      pokemons: []
    }
  },
  mounted () {
    this.pokemons = []
  }
}
</script>
