<template>
  <div>
  <div class="row">
    <h1>About this application</h1>
  </div>
  <div class="row">
    <p>&nbsp;</p>
    <p>This application is based on: <i>AngularJS - GitHub Info</i> (<a href="http://erkobridee.github.io/angularjs-github-info/#/" target="_blank">App</a> | <a href="https://github.com/erkobridee/angularjs-github-info" target="_blank">GitHub</a>)<p>
    <br>
    <p>Application (<a href="https://github.com/douglasporto/vue-github-info" target="_blank">Code on GitHub</a>) </p>
    <ul class="techs">
      <li><b>Interface:</b> <a href="http://getbootstrap.com/" target="_blank">Twitter Bootstrap v3.3.7</a></li>
      <li><b>Engine:</b> <a href="http://vuejs.org/" target="_blank">VueJs v2</a> (<a href="https://vuejs.org/v2/guide/" target="_blank">Guide</a>)</li>
      <li><b>Features:</b> List all public repositories and public gists from some GitHub user</li>
      <li>
        <b>Data Access:</b> <a href="http://developer.github.com/" target="_blank">GitHub API</a>
      </li>
      <li>
        <b>URLs examples accessing GitHub API:</b>
        <ul>
          <li>User Info: <a href="https://api.github.com/users/douglasporto" target="_blank">https://api.github.com/users/douglasporto</a></li>
          <li>User public gists: <a href="https://api.github.com/users/douglasporto/gists" target="_blank">https://api.github.com/users/douglasporto/gists</a></li>
          <li>User public repositories: <a href="https://api.github.com/users/douglasporto/repos" target="_blank">https://api.github.com/users/douglasporto/repos</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <br>
  <div class="row">

    <iframe src="https://ghbtns.com/github-btn.html?user=douglasporto&repo=vue-github-info&type=watch&count=true"
    allowtransparency="true" frameborder="0" scrolling="0" width="110" height="20"></iframe>

    <iframe src="https://ghbtns.com/github-btn.html?user=douglasporto&repo=vue-github-info&type=fork&count=true"
    allowtransparency="true" frameborder="0" scrolling="0" width="95" height="20"></iframe>

    <iframe src="https://ghbtns.com/github-btn.html?user=douglasporto&type=follow&count=true"
    allowtransparency="true" frameborder="0" scrolling="0" width="165" height="20"></iframe>

  </div>
</div>
</template>

<script>
export default {
}
</script>
