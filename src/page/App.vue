<template>
  <div id="app">
    <headview></headview>
  </div>
</template>

<script>

import Headview from "@/page/headview";
export default {
  name: 'App',
  components: {
    Headview
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
