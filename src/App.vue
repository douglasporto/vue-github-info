<template>
  <div id="app">
    <main-nav/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainNav from './components/navbar'
export default {
  name: 'app',
  components: { MainNav }
}
</script>

<style src='./assets/app.scss' lang='scss'>
</style>
