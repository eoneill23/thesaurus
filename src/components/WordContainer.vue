<template>
  <main>
    <section class='prompt' v-if='!this.synonyms.length'>
      Enter a word in the form above to find its synonyms!
    </section>
    <section class='word-card' v-else-if='this.synonyms.length' v-for='(synonym) in this.synonyms'>
      <h3 v-on:click='changeWord(synonym.meta.id)'>{{synonym.meta.id}}</h3>
    </section>
  </main>
</template>

<script>
import WordCard from './WordCard.vue'
export default {
  name: 'WordContainer',
  props: ['synonyms', 'updateWord'],
  methods: {
    changeWord: function(word) {
      this.$emit('update-word', word)
    }
  }
}
</script>

<style scoped>
main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: lightblue;
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: scroll;
}

.prompt {
  height: 20%;
  padding-top: 30px;
  width: 50%;
}

.word-card {
  border: 1px solid black;
  height: 30%;
  margin: 10px;
  overflow: scroll;
  width: 20%;
}

h3 {
  margin-top: 0;
  border-bottom: 1px solid black;
}
</style>
