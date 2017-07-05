<template>
  <div class="row ng-scope">
    <ul class="breadcrumb">
      <li><i class="icon-search"></i>
        <router-link to="/">Search Other</router-link>
      </li>
      <li class="active ng-binding">{{ github.login }}</li>
      <p class="hidden-xs pull-right"><a href="" target="_blank">View on GitHub</a> <i class="glyphicon glyphicon-eye-open"></i></p>
    </ul>

  </div>
</template>
<script>
  import http from 'src/http'
  export default {
    name: 'user',
    data () {
      return {
        github: []
      }
    },
    mounted: function () {
      let api = 'https://api.github.com/users/' + this.$route.params.user
      http.get(api)
      .then(response => response.data)
      .then(data => {
        this.github = data
        console.log(this.gitHub)
      })
    }
  }
</script>
