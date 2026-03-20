<template>
  <div class="scrolling-text">
    <div class="text-container">
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
      <p class="scrolling-content">{{ $t('home.booking_july') }}</p>
      <span class="separator">|</span>
    </div>
  </div>

  <div class="bio">
    <div class="image-container">
      <a href="#">
        <img src="@/bio.webp" id="home-img" alt="Bio Image">
      </a>
    </div>
    <div class="content-container">
      <h1 class="bio-title">{{ $t('home.transforming_brands') }}</h1>
      <h1 class="bio-title">{{ $t('home.brands_into') }}</h1>
      <h1 class="bio-title">{{ $t('home.unforgettable') }}</h1>
      <h1 class="bio-title">{{ $t('home.experiences') }}</h1>
      <p class="text-box">{{ $t('home.text_box') }}</p>
      <button class="button"><router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{
        $t('home.lets_get_started') }}</router-link></button>
    </div>
  </div>

  <section class="obsessed">
    <div id="obsessed-titles">
      <h1 class="obsessed-title">{{ $t('home.obsessed_title_1') }}</h1>
      <h1 class="obsessed-title">{{ $t('home.obsessed_title_2') }}</h1>
      <p class="obsessed-subtitle">{{ $t('home.obsessed_subtitle') }}</p>
    </div>
    <div id="clouds">
      <div class="cloud">
        <h2><router-link :class="{ active: currentPage === 'about' }" to="/about">{{ $t('home.about') }}</router-link>
        </h2>
      </div>
      <div class="cloud">
        <h2><router-link :class="{ active: currentPage === 'services' }" to="/services">{{ $t('home.services')
        }}</router-link></h2>
      </div>
      <div class="cloud">
        <h2><router-link :class="{ active: currentPage === 'mywork' }" to="/mywork">{{ $t('home.my_work')
        }}</router-link></h2>
      </div>
      <div class="cloud">
        <h2><a href="https://itsnvillalobos.gumroad.com/" target="_blank">{{ $t('home.shop') }}</a> </h2>
      </div>
      <div class="cloud">
        <h2><router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow"
            v-html="$t('home.enquire_now')"></router-link> </h2>
      </div>
    </div>
  </section>

  <section class="projects">
    <div id="projects-titles">
      <h1 class="projects-title">{{ $t('home.why_they_loved') }}</h1>
      <h1 class="projects-title">{{ $t('home.working_with_me') }}</h1>
    </div>
    <div class="projects-grid">
      <img src="@/projects1.webp" alt="Project 1">
      <img src="@/projects2.webp" alt="Project 2">
      <img src="@/projects3.webp" alt="Project 3">
      <img src="@/projects4.webp" alt="Project 4">
      <img src="@/projects5.webp" alt="Project 5">
      <img src="@/projects6.webp" alt="Project 6">
    </div>
    <div class="services-feature-media-mobile">
      <div class="services-feature-track">
        <div class="services-testimonies-media">
          <img src="@/projects1.webp" alt="Proyecto de branding">
          <button id="services-home-arrow-left" class="services-testimonies-arrow services-testimonies-arrow-left"
            aria-label="Anterior"></button>
          <button id="services-home-arrow-right" class="services-testimonies-arrow services-testimonies-arrow-right"
            aria-label="Siguiente"></button>
        </div>
      </div>
    </div>
    <a href="https://www.behance.net/nataliavillalo2#">
      <button id="project-button" class="button">{{
        $t('home.projects_button') }}</button>
    </a>
  </section>
  <section id="our-services">
    <img src="@/our-services.webp" alt="Our services">

    <div class="our-services-row">
      <div class="our-services-container">
        <h1 class="our-services-title">{{ $t('home.our_services') }}</h1>
      </div>

      <div class="our-services-container">
        <button id="our-services-button" class="button">
          <router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">
            {{ $t('services.get_quote') }}
          </router-link>
        </button>
      </div>
    </div>
  </section>

  <section class="home-services">
    <div class="home-services-inner">
      <div class="home-services-list">

        <article class="home-service-item">
          <h3 class="home-service-title">{{ $t('services.service_1_title') }}</h3>
          <p class="service-text-box" v-html="$t('services.service_1_text')"></p>
        </article>

        <article class="home-service-item">
          <h3 class="home-service-title">{{ $t('services.service_2_title') }}</h3>
          <p class="service-text-box" v-html="$t('services.service_2_text')"></p>
        </article>

        <article class="home-service-item">
          <h3 class="home-service-title">{{ $t('services.service_3_title') }}</h3>
          <p class="service-text-box" v-html="$t('services.service_3_text')"></p>
        </article>

        <article class="home-service-item">
          <h3 class="home-service-title">{{ $t('services.service_4_title') }}</h3>
          <p class="service-text-box" v-html="$t('services.service_4_text')"></p>
        </article>

        <article class="home-service-item">
          <h3 class="home-service-title">{{ $t('services.service_5_title') }}</h3>
          <p class="service-text-box" v-html="$t('services.service_5_text')"></p>
        </article>

      </div>

      <div class="home-services-image">
        <img src="@/home-services.webp" alt="Trabajo creativo en laptop">
      </div>
    </div>
  </section>

  <section class="work-together-section">
    <h2 class="work-together-title">{{ $t('about.work_together_title') }}</h2>
    <p class="work-together-text">{{ $t('about.work_together_text_1') }} {{ $t('about.work_together_text_2') }}</p>
    <button class="work-together-button"><router-link :class="{ active: currentPage === 'enquirenow' }"
        to="/enquirenow">{{ $t('about.work_together_button') }}</router-link></button>
  </section>

  <section class="home-testimonies">
    <div class="home-testimonies-inner">

      <div class="home-testimonies-media">
        <img src="@/testimony1.webp" alt="Proyecto de branding">
        <button id="desktop-only" class="home-testimonies-arrow home-testimonies-arrow-left"
          aria-label="Anterior"></button>
      </div>

      <div class="home-testimony">
        <button id="mobile-only" class="home-testimonies-arrow home-testimonies-arrow-left"
          aria-label="Anterior"></button>
        <div class="home-testimonies-text">
          <h3 class="home-testimonies-title">{{ $t('home.testimony_1_title') }}</h3>
          <h4 class="home-testimonies-title-small">{{ $t('home.testimony_1_name') }}</h4>
          <p class="home-testimonies-text-box">
            {{ $t('home.testimony_1') }}
          </p>
        </div>
        <button class="home-testimonies-arrow home-testimonies-arrow-right" aria-label="Siguiente"></button>
      </div>
    </div>
  </section>


</template>

<script>
import "../assets/css/home.css";
import { computed } from "vue";
import { onMounted } from 'vue';

export default {
  name: 'Home',
  data() {
    return {
      current: 0,
      autoScroll: null,
      AUTO_SCROLL_DELAY: 5000
    }
  },
  computed: {
    testimonies() {
      const base = [
        { id: 1, image: '/src/assets/testimony1.webp' },
        { id: 2, image: '/src/assets/testimony2.webp' },
        { id: 3, image: '/src/assets/testimony3.webp' },
        { id: 4, image: '/src/assets/testimony4.webp' },
        { id: 5, image: '/src/assets/testimony5.webp' }
      ]

      return base.map(item => ({
        image: item.image,
        title: this.$t(`home.testimony_${item.id}_title`),
        author: this.$t(`home.testimony_${item.id}_name`),
        text: this.$t(`home.testimony_${item.id}`)
      }))
    }
  },

  methods: {
    goToPage(url) {
      window.location.href = url;
    }
  },

  mounted() {
    const vm = this;
    const targets = document.querySelectorAll('.cloud');

    function handleScroll() {
      let allAnimated = true;

      targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (!target.classList.contains('animate')) {
          allAnimated = false;
          if (inView) {
            target.classList.add('animate');
          }
        }
      });

      if (allAnimated) {
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();



    const img = document.querySelector('.home-testimonies-media img');
    const title = document.querySelector('.home-testimonies-title');
    const author = document.querySelector('.home-testimonies-title-small');
    const text = document.querySelector('.home-testimonies-text-box');
    const textWrapper = document.querySelector('.home-testimonies-text');

    const prevBtn = document.querySelector('.home-testimonies-arrow-left');
    const nextBtn = document.querySelector('.home-testimonies-arrow-right');

    const updateTestimony = () => {
      img.classList.add('is-fading');
      textWrapper.classList.add('is-fading');

      setTimeout(() => {
        const t = vm.testimonies[vm.current];
        img.src = t.image;
        title.textContent = t.title;
        author.textContent = t.author;
        text.textContent = t.text;

        img.classList.remove('is-fading');
        textWrapper.classList.remove('is-fading');
      }, 200);
    }

    let autoScroll = null;
    const AUTO_SCROLL_DELAY = 5000;

    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        vm.current = (vm.current + 1) % vm.testimonies.length;
        updateTestimony();
      }, AUTO_SCROLL_DELAY);
    }

    function resetAutoScroll() {
      clearInterval(autoScroll);
      startAutoScroll();
    }


    nextBtn.addEventListener('click', () => {
      this.current = (this.current + 1) % this.testimonies.length;
      updateTestimony();
      resetAutoScroll();
    });

    prevBtn.addEventListener('click', () => {
      this.current = (this.current - 1 + this.testimonies.length) % this.testimonies.length;
      updateTestimony();
      resetAutoScroll();
    });

    startAutoScroll();

    // SERVICES IMAGE SLIDERS
    const serviceSections = document.querySelectorAll(
      '.services-testimonies-media'
    );

    serviceSections.forEach(section => {
      const prevBtn2 = document.getElementById('services-home-arrow-left');
      const nextBtn2 = document.getElementById('services-home-arrow-right');

      const img = section.querySelector('img');

      if (!img) return;

      const AUTO_SCROLL_DELAY = 4000;
      let autoScroll = null;
      let current = 0;
      let images = [];

      // Extract base name (branding, social, etc.)
      const originalSrc = img.getAttribute('src');
      const match = originalSrc.match(/\/([^\/]+?)(\d+)\.webp$/);

      if (!match) return;

      const baseName = match[1]; // branding
      const startIndex = parseInt(match[2], 10);

      // Dynamically detect how many images exist
      const loadImages = async () => {
        let index = 1;

        while (true) {
          try {
            const path = new URL(
              `../assets/${baseName}${index}.webp`,
              import.meta.url
            ).href;

            await new Promise((resolve, reject) => {
              const testImg = new Image();
              testImg.src = path;
              testImg.onload = resolve;
              testImg.onerror = reject;
            });

            images.push(path);
            index++;
          } catch {
            break;
          }
        }

        if (images.length === 0) return;

        current = startIndex - 1;
        img.src = images[current];
      };

      const updateImage = () => {
        img.classList.add('is-fading');

        setTimeout(() => {
          img.src = images[current];
          img.classList.remove('is-fading');
        }, 200);
      };

      const next = () => {
        current = (current + 1) % images.length;
        updateImage();
      };

      const prev = () => {
        current = (current - 1 + images.length) % images.length;
        updateImage();
      };

      const startAutoScroll = () => {
        autoScroll = setInterval(next, AUTO_SCROLL_DELAY);
      };

      const resetAutoScroll = () => {
        clearInterval(autoScroll);
        startAutoScroll();
      };

      nextBtn2.addEventListener('click', () => {
        next();
        resetAutoScroll();
      });

      prevBtn2.addEventListener('click', () => {
        prev();
        resetAutoScroll();
      });

      loadImages().then(() => {
        if (images.length > 1) {
          startAutoScroll();
        }
      });
    });

  }



};
</script>