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
        <p class="copyright">&copy; {{ currentYear }} Natalia Villalobos</p>
        </div>
    </div>

    <div class="footer-columns">
        <div class="footer-column">
        <h4 class="footer-title"><a href="/">Home</a></h4>
        <ul>
            <li class="footer-element"><a href="services.html">Services</a></li>
            <li class="footer-element"><a href="https://itsnvillalobos.gumroad.com/">Shop</a></li>
            <li class="footer-element"><a href="mywork.html">My Work</a></li>
        </ul>
        </div>
        <div class="footer-column">
        <h4 class="footer-title"><a href="enquirenow.html">Contact</a></h4>
        <ul>
            <li class="footer-element"><a href="about.html">About</a></li>
            <li class="footer-element"><a href="enquirenow.html">Work With Me</a></li>
            <li class="footer-element"><a href="enquirenow.html">Trabaja Conmigo</a></li>
        </ul>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
