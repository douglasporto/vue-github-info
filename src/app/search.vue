<template>
  <div class="col-md-12">
    <div class="col-md-8 col-lg-offset-2 jumbotron">
        <h3>GitHub user:</h3>
        <form>

          <div class="input-group">
            <input
              type="text" class="form-control" v-model="user"
              placeholder="ex.: douglasporto">
            <span class="input-group-btn">
              <button class="btn btn-default" @click="searchUser()">
                <i class="glyphicon glyphicon-search"></i> Search
              </button>
            </span>
          </div><!-- /input-group -->

        </form>
        <small>Public Repositories and Gists</small>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'search',
    data () {
      return {
        user: ''
      }
    },
    methods: {
      searchUser: function searchUser () {
        var gitHub = this.user || 'douglasporto'
        this.$router.push({ path: '/user/' + gitHub })
      }
    }
  }
</script>
