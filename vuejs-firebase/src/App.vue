<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/protected">Protected</router-link>
  </div>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}

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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

form {
  max-width: 300px;
  margin: auto;
}

input {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 100%;
}

a.btn {
  border-radius: 3px;
  background-color: cadetblue;
  padding: 10px;
  margin: 10px auto;
  display: block;
  text-decoration: none;
  color: white;
}
</style>
