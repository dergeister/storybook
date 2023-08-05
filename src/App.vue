<template>
  <div class="app">
    <h1>App</h1>
    <Logo variant="dark" />
    <Navbar />
  </div>
</template>
<script>
import Logo from './components/atoms/Logo.vue';
import Navbar from './components/organisms/Navbar.vue';

export default {
  components: {
    Logo,
    Navbar
  }
}
</script>
<style lang="scss">
.app {
  background-color: wheat;
}
</style>
