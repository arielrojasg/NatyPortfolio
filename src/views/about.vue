<template>
  <div class="about">
    <div class="about-container">
      <h4 class="about-title">{{ $t('about.title') }}</h4>
      <h1 class="about-bigger-title">{{ $t('about.bigger_title') }}</h1>
      <p class="about-text">{{ $t('about.description') }}</p>
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
  <section class="work-together-section">
    <h2 class="work-together-title">{{ $t('about.work_together_title') }}</h2>
    <p class="work-together-text">{{ $t('about.work_together_text_1') }} {{ $t('about.work_together_text_2') }}</p>
    <button class="work-together-button"><router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{ $t('about.work_together_button') }}</router-link></button>
  </section>
  <section class="send-info-section">
    <h2 class="send-info-title">{{ $t('about.send_info_title_1') }} </h2>
    <h2 class="send-info-title">{{ $t('about.send_info_title_2') }}</h2>
    <div class="send-info-line">
      <button id="send-info-button"><a href="https://drive.google.com/file/d/1ck73iHQvNt7i8gJuluZjnn5kW0x5RTud/view?usp=drive_link" target="_blank">{{ $t('about.send_info_button') }}</a></button>
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
