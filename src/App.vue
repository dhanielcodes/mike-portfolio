<template>
  <Nav />
  <router-view></router-view>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name: "App",
  components: { Nav },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap");
* {
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
  background: #f3faff;
}
#app {
  width: 1250px;
  margin: auto;
}
@media (max-width: 1270px) {
  #app {
    width: 92%;
  }
}
</style>
