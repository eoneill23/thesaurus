<template>
  <div id="app">
    <Header />
    <WordSearchForm />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import WordSearchForm from './components/WordSearchForm.vue'

export default {
  name: 'App',
  components: {
   Header,
   WordSearchForm
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
