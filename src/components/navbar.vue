<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-left">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="/">
              <img src="@images/LogoNat.webp" alt="logo" width="60px">
            </a> 
          </li>
          <ul class="social-icons-nav">
            <li><a href="https://www.instagram.com/its_nvillalobos/"><img src="@/instagram-icon.svg" alt="Instagram"></a></li>
            <li><a href="https://www.behance.net/nataliavillalo2#"><img src="@/behance-icon.svg" alt="Behance"></a></li>
            <li><a href="https://www.linkedin.com/in/natalia-villalobos-0aa0a121a/"><img src="@/linkedin-icon.svg" alt="LinkedIn"></a></li>
            <li><a href="https://tiktok.com/@its_nvillalobos"><img src="@/tiktok-icon.svg" alt="TikTok"></a></li>
         </ul>
        </ul>
      </div>
      <div class="navbar-right" :class="{ open: menuOpen }">
        <div class="navbar-hamburger" @click="toggleMenu">
          <img v-if="!menuOpen" src="@/hamburger.svg" id="hamburger" alt="menu" width="10vw">
          <img v-else src="@/X.svg" id="close" alt="close" width="10vw">
        </div>
        <ul class="navbar-nav">
          <li class="element">
          <router-link :class="{ active: currentPage === 'about' }" @click="closeMenu" to="/about">{{ $t('navbar.about') }}</router-link> 
        </li>
        <div class="divider"></div>
        <li class="element">
          <router-link :class="{ active: currentPage === 'services' }" @click="closeMenu" to="/services">{{ $t('navbar.services') }}</router-link>
        </li>
        <div class="divider"></div>
        <li class="element">
          <router-link :class="{ active: currentPage === 'mywork' }" @click="closeMenu" to="/mywork">{{ $t('navbar.mywork') }}</router-link>
        </li>
        <div class="divider"></div>
        <li class="element">
          <a href="https://itsnvillalobos.gumroad.com/" @click="closeMenu" target="_blank">{{ $t('navbar.shop') }}</a> 
        </li>
        <div class="divider"></div>
        <li class="element" id="enquirebutton">
          <router-link :class="{ active: currentPage === 'enquirenow' }" @click="closeMenu" id="enquire-button" to="/enquirenow">{{ $t('navbar.enquire_now') }}</router-link> 
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
  computed: {
    currentPage() {
      return this.$route.path; // Dynamically gets the current route
    },
  },
  data() {
    return {
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
    closeMenu() {
      // This method is called on every link click to close the menu
      this.menuOpen = false;
      document.body.classList.remove('lock-scroll');
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
