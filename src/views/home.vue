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
          <img src="@/bio.png" alt="Bio Image">
        </a>
      </div>
      <div class="content-container">
        <h1 class="bio-title">{{ $t('home.transforming_brands') }}</h1>
        <h1 class="bio-title">{{ $t('home.brands_into') }}</h1>
        <h1 class="bio-title-fucsia">{{ $t('home.unforgettable') }}</h1>
        <h1 class="bio-title-fucsia">{{ $t('home.experiences') }}</h1>
        <p class="text-box">{{ $t('home.text_box') }}</p>
        <button class="button"><router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{ $t('home.lets_get_started') }}</router-link></button>
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
          <h2><router-link :class="{ active: currentPage === 'about' }" to="/about">{{ $t('home.about') }}</router-link></h2>
        </div>
        <div class="cloud">
          <h2><router-link :class="{ active: currentPage === 'services' }" to="/services">{{ $t('home.services') }}</router-link></h2>
        </div>
        <div class="cloud">
          <h2><router-link :class="{ active: currentPage === 'mywork' }" to="/mywork">{{ $t('home.my_work') }}</router-link></h2>
        </div>
        <div class="cloud">
          <h2><a href="https://itsnvillalobos.gumroad.com/" target="_blank">{{ $t('home.shop') }}</a> </h2>
        </div>
        <div class="cloud">
          <h2><router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow" v-html="$t('home.enquire_now')"></router-link> </h2>
        </div>
      </div>
    </section>
  
    <section class="services-section">
      <div class="services-container">
        <div id="services-title-line">
          <h1 class="services-title">{{ $t('home.services_title') }}</h1>
        </div>
        <div id="services-columns">
          <div class="services">
            <div class="services-question">{{ $t('home.branding') }}</div>
          </div>
          <div class="line"></div>
          <div class="services">
            <div class="services-question">{{ $t('home.brand_collaterals') }}</div>
          </div>
          <div class="line"></div>
          <div class="services">
            <div class="services-question">{{ $t('home.social_media_management') }}</div>
          </div>
          <div class="line"></div>
          <div class="services">
            <div class="services-question">{{ $t('home.web_design') }}</div>
          </div>
          <div class="line"></div>
          <div class="services">
            <div class="services-question">{{ $t('home.photography') }}</div>
          </div>
          <div class="line"></div>
        </div>
      </div>
      <div id="services-button-container">
        <button class="services-button"><router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{ $t('home.lets_work_together') }}</router-link></button>
      </div>
    </section>
  
    <section class="loved">
      <div id="loved-titles">
        <h1 class="loved-title">{{ $t('home.why_they_loved') }}</h1>
        <h1 class="loved-title">{{ $t('home.working_with_me') }}</h1>
      </div>
      <div id="testimonies" class="testimonies-container">
        <div id="testimony-1" class="testimony">
          <p>{{ $t('home.testimony_1') }}</p>
          <h3>{{ $t('home.testimony_1_name') }}</h3>
        </div>
        <div id="testimony-2" class="testimony">
          <p>{{ $t('home.testimony_2') }}</p>
          <h3>{{ $t('home.testimony_2_name') }}</h3>
        </div>
        <div id="testimony-3" class="testimony">
          <p>{{ $t('home.testimony_3') }}</p>
          <h3>{{ $t('home.testimony_3_name') }}</h3>
        </div>
        <div id="testimony-4" class="testimony">
          <p>{{ $t('home.testimony_3') }}</p>
          <h3>{{ $t('home.testimony_3_name') }}</h3>
        </div>
      </div>
    </section>
    <section id="blank"></section>
  </template>
  
  <script>
    import "../assets/css/home.css";
    export default {
      name: 'Home',
      methods: {
        goToPage(url) {
          window.location.href = url;
        }
      }
    };
    document.addEventListener('DOMContentLoaded', function () {
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

    });
  </script>