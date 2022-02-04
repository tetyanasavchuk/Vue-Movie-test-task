<template>
  <header>
    <router-link to="/">
      <h1>Popular movies</h1>
    </router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
  background-color: #03393f;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  background-color: #2a7481;
}

h1 {
  font-size: 34px;
  color: #fff;
}
</style>
