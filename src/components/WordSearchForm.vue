<template>
  <form>
    <input v-model='word'></input>
    <button v-on:click='searchSynonyms'>Search</button>
  </form>
</template>

<script>
import { getSynonyms } from '../util/apiCalls'

export default {
  name: 'WordSearchForm',
  data () {
    return {
      word: '',
      synonyms: {}
    }
  },
  methods: {
    searchSynonyms: async function (e) {
      e.preventDefault()
      try {
        const result = await getSynonyms(this.word)
        this.synonyms = parsedSynonyms
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
form {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: red;
  height: 50px;
}
</style>
