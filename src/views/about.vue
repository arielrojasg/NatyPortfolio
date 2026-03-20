<template>
  <div class="bio-about">
    <div class="image-container">
      <a href="#">
        <img src="@/bio2.webp" id="about-img" alt="Bio Image">
      </a>
    </div>
    <div class="content-container-about">
      <h1 class="bio-title-about">{{ $t('about.title') }}</h1>
      <p class="text-box-about" v-html="$t('about.paragraph')"></p>
      <p class="text-box-about" v-html="$t('about.paragraph2')"></p>
      <p class="text-box-about" v-html="$t('about.paragraph3')"></p>
      <button class="button"><router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{
        $t('about.connect') }}</router-link></button>
    </div>
  </div>
  <section class="info-section">
    <div id="info-left">
      <div class="info-card half-height">
        <h2 class="info-title">{{ $t('about.what_i_do') }}</h2>
        <p class="info-description" v-html="$t('about.what_i_do_description')"></p>
      </div>
      <div class="info-card half-height">
        <h2 class="info-title">{{ $t('about.why_i_do_it') }}</h2>
        <p class="info-description" v-html="$t('about.why_i_do_it_description')"></p>
      </div>
    </div>
    <div id="info-right">
      <div class="info-card full-height">
        <h2 class="info-title">{{ $t('about.how_i_do_it') }}</h2>
        <p class="info-description" v-html="$t('about.how_i_do_it_description')"></p>
      </div>
    </div>
  </section>

  <section id="our-services">
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

  <section class="send-info-section">
    <img src="@/about-send.webp" alt="Our services">
    <h2 class="send-info-title">{{ $t('about.send_info_title_1') }} </h2>
    <div class="send-info-line">
      <button id="send-info-button"><a
          href="https://drive.google.com/file/d/1ck73iHQvNt7i8gJuluZjnn5kW0x5RTud/view?usp=drive_link"
          target="_blank">{{ $t('about.send_info_button') }}</a></button>
    </div>
  </section>
  <section id="blank"></section>
</template>

<script>
import "../assets/css/about.css";
export default {
  name: 'About',
  methods: {
    goToPage(url) {
      window.location.href = url;
    }
  }
};
</script>
