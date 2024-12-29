<template>
  <div id="app" class="app">
    <AppNavbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from "./components/Navbar.vue"; // Import with new name

export default {
  name: "App",
  components: {
    AppNavbar // Register with new name
  },
};
</script>

<style src="./assets/app.css"></style>
