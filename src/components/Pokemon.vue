<template>
  <div>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="un lindo pokemon">
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Pokemon',
    props: {
      id: {
        type: Number,
        required: false,
        default: 0
      },
      name: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: false
      } 
    }
  }
</script>
