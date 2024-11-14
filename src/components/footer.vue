<template>
  <footer class="footer">
    <div class="footer-img-column">
      <img id="footer-image" src="../../assets/img/LogoFooter.webp" alt="Bio Image">
    </div>
    
    <div class="footer-socials">
      <div class="footer-column">
        <ul class="social-icons">
          <li><a href="https://www.instagram.com/its_nvillalobos/"><img src="assets/instagram-icon.svg" alt="Instagram"></a></li>
          <li><a href="https://www.behance.net/nataliavillalo2#"><img src="assets/behance-icon.svg" alt="Behance"></a></li>
          <li><a href="https://www.linkedin.com/in/natalia-villalobos-0aa0a121a/"><img src="assets/linkedin-icon.svg" alt="LinkedIn"></a></li>
          <li><a href="https://tiktok.com/@its_nvillalobos"><img src="assets/tiktok-icon.svg" alt="TikTok"></a></li>
        </ul>
        <p class="copyright">&copy; {{ currentYear }} {{ $t('footer.copyright') }}</p>
      </div>
    </div>

    <div class="footer-columns">
      <div class="footer-column">
        <h4 class="footer-title"><a href="/">{{ $t('footer.home') }}</a></h4>
        <ul>
          <li class="footer-element"><a href="services.html">{{ $t('footer.services') }}</a></li>
          <li class="footer-element"><a href="https://itsnvillalobos.gumroad.com/">{{ $t('footer.shop') }}</a></li>
          <li class="footer-element"><a href="mywork.html">{{ $t('footer.mywork') }}</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4 class="footer-title"><a href="enquirenow.html">{{ $t('footer.contact') }}</a></h4>
        <ul>
          <li class="footer-element"><a href="about.html">{{ $t('footer.about') }}</a></li>
          <li class="footer-element"><a href="enquirenow.html">{{ $t('footer.work_with_me') }}</a></li>
          <li class="footer-element"><a href="enquirenow.html">{{ $t('footer.trabaja_conmigo') }}</a></li>
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
