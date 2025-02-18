<template>
  <footer class="footer">
    <div class="footer-img-column">
      <img id="footer-image" src="@images/LogoFooter.webp" alt="Bio Image">
    </div>
    
    <div class="footer-socials">
      <div class="footer-column">
        <ul class="social-icons">
          <li><a href="https://www.instagram.com/its_nvillalobos/"><img src="@/instagram-icon.svg" alt="Instagram"></a></li>
          <li><a href="https://www.behance.net/nataliavillalo2#"><img src="@/behance-icon.svg" alt="Behance"></a></li>
          <li><a href="https://www.linkedin.com/in/natalia-villalobos-0aa0a121a/"><img src="@/linkedin-icon.svg" alt="LinkedIn"></a></li>
          <li><a href="https://tiktok.com/@its_nvillalobos"><img src="@/tiktok-icon.svg" alt="TikTok"></a></li>
        </ul>
        <p class="copyright">&copy; {{ currentYear }} {{ $t('footer.copyright') }}</p>
      </div>
    </div>

    <div class="footer-columns">
      <div class="footer-column">
        <h4 class="footer-title"><a href="/">{{ $t('footer.home') }}</a></h4>
        <ul>
          <li class="footer-element"><router-link :class="{ active: currentPage === 'services' }" to="/services">{{ $t('footer.services') }}</router-link> </li>
          <li class="footer-element"><a href="https://itsnvillalobos.gumroad.com/" target="_blank">{{ $t('footer.shop') }}</a></li>
          <li class="footer-element"><router-link :class="{ active: currentPage === 'mywork' }" to="/mywork">{{ $t('footer.mywork') }}</router-link></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title"><router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{ $t('footer.contact') }}</router-link></h4>
        <ul>
          <li class="footer-element"><router-link :class="{ active: currentPage === 'about' }" to="/about">{{ $t('footer.about') }}</router-link> </li>
          <li class="footer-element"><router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{ $t('footer.work_with_me') }}</router-link></li>
          <li class="footer-element"><router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{ $t('footer.trabaja_conmigo') }}</router-link></li>
        </ul>
      </div>

      <!-- New Footer Column for Language Selector -->
      <div class="footer-column">
        <select v-model="$i18n.locale" @change="updateLanguage($event)" class="language-selector">
          <option value="en" :disabled="$i18n.locale === 'en'">EN</option>
          <option value="es" :disabled="$i18n.locale === 'es'">ES</option>
        </select>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear() // Dynamically get current year
    };
  },
  methods: {
    updateLanguage(event) {
      const selectedLanguage = event.target.value;
      this.$i18n.locale = selectedLanguage; // Change language using vue-i18n
      localStorage.setItem('selectedLanguage', selectedLanguage); // Save to localStorage
    }
  }
};
</script>
