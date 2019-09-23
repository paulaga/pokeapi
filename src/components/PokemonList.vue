<template>
  <div class="container"
    :style="{'background': randomColor}">
    <img :src="image">
    <div class="name-wrapper">
      <p class="name">{{name}}</p>
    </div>
    <div class="data-wrapper">
      <h2 v-if="experience">Experience</h2>
      <p>{{experience}}</p>
    </div>
    <div class="data-wrapper">
      <h2 v-if="abilities">Abilities</h2>
      <ul>
        <li v-for="(ability, index) in abilities" :key="index">{{ability}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PokemonList',
    props: {
      id: Number,
      name: String,
      image: String,
      experience: Number,
      abilities: Array
    },
    data() {
      return {
        randomColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
      }
    }
  }
</script>

<style lang="scss">
  h2 {
    font-weight: 600;
    font-size: 1.2em;
    color: #1a9fae;
    margin-bottom: 10px;
  }
  .data-wrapper {
    margin-bottom: 30px;
  }
</style>