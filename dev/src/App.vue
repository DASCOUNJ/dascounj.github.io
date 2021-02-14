<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">DASCO</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/"><span class="fa fa-home fa-fw"></span>Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about"><span class="fa fa-info fa-fw"></span>About</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view class="container" />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100%;
}
</style>
