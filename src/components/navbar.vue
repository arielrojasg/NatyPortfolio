<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-left">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="index.html">
              <img src="@images/LogoNat.webp" alt="logo" width="60px">
            </a>
          </li>
        </ul>
      </div>
      <div class="navbar-right" :class="{ open: menuOpen }">
        <div class="navbar-hamburger" @click="toggleMenu">
          <img v-if="!menuOpen" src="@/hamburger.png" id="hamburger" alt="menu" width="10vw">
          <img v-else src="@/X.png" id="close" alt="close" width="10vw">
        </div>
        <ul class="navbar-nav">
          <li class="element">
            <a :class="{ active: currentPage === 'about' }" href="about.html">{{ $t('navbar.about') }}</a>
          </li>
          <div class="divider"></div>
          <li class="element">
            <a :class="{ active: currentPage === 'services' }" href="services.html">{{ $t('navbar.services') }}</a>
          </li>
          <div class="divider"></div>
          <li class="element">
            <a :class="{ active: currentPage === 'mywork' }" href="mywork.html">{{ $t('navbar.mywork') }}</a>
          </li>
          <div class="divider"></div>
          <li class="element">
            <a href="https://itsnvillalobos.gumroad.com/">{{ $t('navbar.shop') }}</a>
          </li>
          <div class="divider"></div>
          <li class="element">
            <a :class="{ active: currentPage === 'enquirenow' }" id="enquire-button" href="enquirenow.html">{{ $t('navbar.enquire_now') }}</a>
          </li>
          <select v-model="$i18n.locale" @change="updateLanguage($event)" class="language-selector-nav">
            <option value="en" :disabled="$i18n.locale === 'en'">EN</option>
            <option value="es" :disabled="$i18n.locale === 'es'">ES</option>
          </select>
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
      if (this.menuOpen) {
        document.body.classList.add('lock-scroll');
      } else {
        document.body.classList.remove('lock-scroll');
      }
    },
    mounted() {
    // If you need to attach any DOM-specific logic, it should be placed here
    const menuButton = this.$el.querySelector('.navbar-hamburger');
    if (menuButton) {
      menuButton.addEventListener('click', this.toggleMenu);
    }
  },
  updateLanguage(event) {
      const selectedLanguage = event.target.value;
      this.$i18n.locale = selectedLanguage; // Change language using vue-i18n
      localStorage.setItem('selectedLanguage', selectedLanguage); // Save to localStorage
    },
  },
};
</script>
