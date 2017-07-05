<template>
  <div class="col-md-12">
    <div class="col-md-8 col-lg-offset-2 jumbotron">
        <h3>GitHub user:</h3>
        <form>

          <div class="input-group">
            <input
              type="text" class="form-control" id="searchField"
              placeholder="ex.: douglasporto">
            <span class="input-group-btn">
              <button class="btn btn-default" type="submit">
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
  export default {}
</script>

