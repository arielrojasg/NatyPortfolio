<template>
    <div id="app">
      <!-- Navbar component -->
      <Navbar />
      
      <!-- Router view for the content of each page -->
      <router-view />
    </div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue'; // Import the Navbar component
  
  export default {
    name: 'App',
    components: {
      Navbar, // Register the Navbar component
    },
  };
  </script>  