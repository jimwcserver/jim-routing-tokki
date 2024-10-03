<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm px-5 py-3">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">NewJeans</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor04" aria-controls="navbarColor04" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor04">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/minji">Minji</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/hanni">Hanni</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/danielle">Danielle</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/haerin">Haerin</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/hyein">Hyein</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Fredoka', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000831;
}

.navbar {
  color: #000831 !important;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 600;
}

.nav-link {
  font-size: 1.2rem;
}

.home, .minji, .hanni, .danielle, .haerin, .hyein {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
}

.right {
  justify-content: start;
  display: flex;
  flex-direction: column;
}


img {
  border-radius: 1rem;
  margin-bottom: 2rem;
  width: 20rem;
}

h1 {
  padding: 3rem 1rem;
  font-weight: 600;
}

p {
  font-size: 1.2em;
}

</style>