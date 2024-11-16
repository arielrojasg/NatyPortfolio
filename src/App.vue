<template>
    <div id="app">
      <Navbar />
      
      <router-view />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue'; // Import the Navbar component
  
  export default {
    name: 'App',
    components: {
      Navbar,
    },
  };
  </script>  