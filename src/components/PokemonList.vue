<template>
  <div class="container"
    :style="{'background': randomColor}">
    <img :src="image">
    <p class="name">{{name}}</p>
  </div>
</template>

<script>
  export default {
    name: 'PokemonList',
    props: {
      id: Number,
      name: String,
      url: String,
      image: String,
    },
    data() {
      return {
        randomColor: 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
      }
    }
  }
</script>

<style lang="scss">
img {
  width: 100px;
  height: auto;
}
.container {
  height: 100%;
  padding: 10px;
}
.name {
  text-transform: uppercase;
  color: #FFF;
  font-weight: 800;
  text-shadow: 1px 1px 2px #a9a0a0b3;
}

</style>