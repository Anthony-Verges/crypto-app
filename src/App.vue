<template>
  <div id="nav">
    <img class="img" src="./assets/btc-img.png" alt="" />
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/bitcoins">Bitcoins</router-link> |
      <router-link to="/ethereum">Ethereum</router-link> |
      <router-link to="/cardList">Cryptomonnaies</router-link>
    </div>
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
  background-color: #19151c;
  margin-bottom: 5rem;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: auto;
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
.img {
  width: 4rem;
  height: 4rem;
}
</style>
