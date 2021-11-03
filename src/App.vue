<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/bitcoins">Bitcoins</router-link> |
    <router-link to="/ethereum">Ethereum</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ff8500;
  text-decoration: none;
  padding: 50px;
}

#nav a.router-link-exact-active {
  color: #cb06ed;
}
</style>
