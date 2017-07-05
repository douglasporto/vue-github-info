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
              <div class="col-md-4">
                <h4><a :href="r.html_url" target="_blank">{{ r.name }}</a> </h4>
                <span class="visible-desktop line-desc">
                  {{ r.description || 'No Information' }}
                </span>
              </div>
              <div class="col-md-3">
                <div class="updated">
                  <small>Updated: {{getUp(r.updated_at)}}</small>
                </div>
              </div>
              <div class="col-md-1">
                <div class="language">
                  {{ r.language }}
                </div>
              </div>
              <div class="col-md-2 pull-right">
                <ul class="count">
                  <li><b>{{r.watchers_count}}</b><br><small>Watchers</small></li>
                  <li><b>{{r.forks_count}}</b><br><small>Forks</small></li>
                </ul>
              </div>
            </div>
          </div>
          <div role="tabpanel" class="tab-pane" id="gists">
            <div class="row repo"  v-for='(g, index) in gists'>
              <div class="col-md-4">
                <h4><a :href="g.html_url" target="_blank">{{ getFile(g.files).filename }}</a> </h4>
                <span class="visible-desktop line-desc">
                  {{ g.description || 'No Information' }}
                </span>
              </div>
              <div class="col-md-3">
                <div class="updated">
                  <small>Updated: {{getUp(g.updated_at)}}</small>
                </div>
              </div>
              <div class="col-md-1">
                <div class="language">
                  {{ g.language }}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>
  import http from 'src/http'
  import { orderBy } from 'lodash'
  export default {
    name: 'user',
    data () {
      return {
        github: [],
        repos: [],
        gists: []
      }
    },
    methods: {
      getUp: function (date) {
        var newDate = date.split('T')
        return newDate[0]
      },
      getFile: function (files) {
        for (var key in files) {
          return files[key]
        }
      }
    },
    mounted: function () {
      let api = 'https://api.github.com/users/' + this.$route.params.user
      http.get(api).then(response => response.data).then(data => {
        this.github = data
        console.log(data)
      })
      http.get(api + '/repos').then(response => response.data).then(data => {
        this.repos = orderBy(data, 'updated_at', ['desc'])
      })
      http.get(api + '/gists').then(response => response.data).then(data => { this.gists = data })
    }
  }
</script>
