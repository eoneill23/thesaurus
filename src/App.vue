<template>
  <div id="app">
    <Header />
    <form>
      <input v-model='word' placeholder='Enter a word...'></input>
      <button v-on:click='searchSynonyms'>Search</button>
    </form>
    <WordContainer :synonyms='synonyms' @update-word='updateWord'/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import WordContainer from './components/WordContainer.vue'
import { getSynonyms } from './util/apiCalls'
export default {
  name: 'App',
  components: {
    Header,
    WordContainer
  },
  data () {
  return {
    word: '',
    synonyms: []
  }
  },
  methods: {
    searchSynonyms: async function (e) {
      e.preventDefault()
      try {
        const result = await getSynonyms(this.word)
        this.synonyms = result
        this.word = ''
      } catch (error) {
        console.log(error)
      }
    },
    updateWord: function(value) {
      this.word = value
      this.searchSynonyms({preventDefault: () => {}})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
  height: 100vh;
  width: 100%;
}
</style>
