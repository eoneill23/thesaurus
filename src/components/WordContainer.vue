<template>
  <main>
    <section v-for='(synonym) in this.synonyms'>
      {{synonym.meta.id}}
    </section>
  </main>
</template>

<script>
import WordCard from './WordCard.vue'

export default {
  name: 'WordContainer',
  data () {
    return {
      wordCards: []
    }
  },
  props: ['synonyms']
}
</script>

<style scoped>
main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: purple;
  height: 80vh;
}
</style>
