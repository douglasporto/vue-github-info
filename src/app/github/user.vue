<template>
<div>
  <div class="row">
    <ul class="breadcrumb">
      <li><i class="icon-search"></i>
        <router-link to="/">Search Other</router-link>
      </li>
      <li class="active ng-binding">{{ github.login }}</li>
      <p class="hidden-xs pull-right"><a :href="github.html_url" target="_blank">View on GitHub</a> <i class="glyphicon glyphicon-eye-open"></i></p>
    </ul>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="avatar">
        <img alt="erkobridee's avatar" :src="github.avatar_url">
      </div>
      <div class="nickname">
        <h2>{{ github.name }}</h2>
        <h2 class="login"><small>({{ github.login }})</small></h2>
      </div>
    </div>
    <div class="col-md-6">
      <div class="pull-right well info">
        <ul>
          <li><h1>{{ github.public_repos }}</h1>Public Repos</li>
          <li><h1>{{ github.followers }}</h1>Followers</li></ul></div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
        <!-- Nav tabs -->
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active"><a href="#repositories" aria-controls="home" role="tab" data-toggle="tab">Public Repositories ({{ github.public_repos }})</a></li>
          <li role="presentation"><a href="#gists" aria-controls="profile" role="tab" data-toggle="tab">Public Gists ({{ github.public_gists }})</a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="repositories">
            <div class="row repo"  v-for='(r, index) in repos'>
              <div class="col-md-6">
                <h4><a>{{ r.name }}</a></h4>
                <span class="visible-desktop line-desc">{{ r.description || 'No Information' }}</span>
              </div>
              <div class="col-md-2">
                {{ r.language }}
              </div>
              <div class="col-md-2 pull-right">
                <ul class="count">
                  <li>0 <br>Watchers</li>
                  <li>0 <br>Forks</li>
                </ul>
                <!-- <ul><li class="lang"><b class="ng-binding"></b></li><li class="watchers"><b class="ng-binding">0</b> <span><ng-pluralize count="repo.watchers" when="vm.watchForms">Watchers</ng-pluralize></span></li><li class="forks"><b class="ng-binding">0</b> <span><ng-pluralize count="repo.forks" when="vm.forkForms">Forks</ng-pluralize></span></li></ul> -->
              </div>
            </div>
            <!-- <table class="table-striped">
              <tbody>
                <tr v-for='(r, index) in repos'>
                    <td>
                      {{ r.name }}
                    </td>
                    <td>aaa</td>
                </tr>
              </tbody>
            </table> -->
            {{ repos }}
          </div>
          <div role="tabpanel" class="tab-pane" id="gists">
            {{ github }}
          </div>          
        </div>
    </div>
  </div>
</div>
</template>
<script>
  import http from 'src/http'
  export default {
    name: 'user',
    data () {
      return {
        github: [],
        repos: []
      }
    },
    mounted: function () {
      let api = 'https://api.github.com/users/' + this.$route.params.user
      http.get(api).then(response => response.data).then(data => { this.github = data })
      http.get(api + '/repos').then(response => response.data).then(data => { this.repos = data })
    }
  }
</script>
