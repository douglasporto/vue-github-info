<template>
  <div class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- <a class="navbar-brand" href="/">VUE-GITHUB-INFO</a> -->
        <router-link class="navbar-brand" to="/">VUE-GITHUB-INFO</router-link>
      </div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <!-- <li> -->
            <router-link tag='li' exact-active-class='active' to="/"><a>Search</a></router-link>
          <!-- </li>
          <li> -->
            <router-link tag='li' exact-active-class='active' to="/about"><a>About</a></router-link>
          <!-- </li> -->
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
