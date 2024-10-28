<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-left">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="index.html">
              <img src="assets/img/Logo Nat.webp" alt="logo" width="60px">
            </a>
          </li>
        </ul>
      </div>
      <div class="navbar-right" :class="{ open: menuOpen }">
        <div class="navbar-hamburger" @click="toggleMenu">
          <img src="assets/hamburger.png" alt="menu" width="10vw">
        </div>

        <ul class="navbar-nav">
          <li class="element">
            <a :class="{ active: currentPage === 'about' }" href="about.html">{{ $t('navbar.about') }}</a>
          </li>
          <li class="element">
            <a :class="{ active: currentPage === 'services' }" href="services.html">{{ $t('navbar.services') }}</a>
          </li>
          <li class="element">
            <a :class="{ active: currentPage === 'mywork' }" href="mywork.html">{{ $t('navbar.mywork') }}</a>
          </li>
          <li class="element">
            <a href="https://itsnvillalobos.gumroad.com/">{{ $t('navbar.shop') }}</a>
          </li>
          <li class="element">
            <a :class="{ active: currentPage === 'enquirenow' }" href="enquirenow.html">{{ $t('navbar.enquire_now') }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      currentPage: window.location.pathname.split("/").pop().split(".")[0],
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
