<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
