<template>
	<section id="transforming">
	  <div id="transforming-titles">
		<h1 id="obsessed-title-1" class="obsessed-title">{{ $t('services.transforming_title_1') }}</h1>
		<h1 class="obsessed-title">{{ $t('services.transforming_title_2') }}</h1>
		<p class="obsessed-subtitle">{{ $t('services.explore_services') }}</p>
	  </div>
	  <button id="transforming-button" @click="goToPage('enquirenow.html')">{{ $t('services.get_quote') }}</button>
	</section>
  
	<section class="branding-section">
	  <div id="branding-left">
		<div class="branding-card half-height">
		  <h2 class="branding-title">{{ $t('services.branding_title') }}</h2>
		  <p class="branding-description">{{ $t('services.branding_description') }}</p>
		</div>
		<div id="branding-half-bg" class="branding-card half-height"></div>
	  </div>
	  <div id="branding-right">
		<div id="branding-full-bg" class="branding-card full-height"></div>
	  </div>
	</section>
  
	<section class="collaterals-section">
	  <div id="collaterals-left">
		<div id="collaterals-full-bg" class="collaterals-card full-height"></div>
	  </div>
	  <div id="collaterals-right">
		<div class="collaterals-card half-height">
		  <h2 class="collaterals-title">{{ $t('services.collaterals_title') }}</h2>
		  <p class="collaterals-description">{{ $t('services.collaterals_description') }}</p>
		</div>
		<div id="collaterals-half-bg" class="collaterals-card half-height"></div>
	  </div>
	</section>
  
	<section class="social-section">
	  <div id="social-left">
		<div class="social-card half-height">
		  <h2 class="social-title">{{ $t('services.social_title') }}</h2>
		  <p class="social-description">{{ $t('services.social_description') }}</p>
		</div>
		<div id="social-half-bg" class="social-card half-height"></div>
	  </div>
	  <div id="social-right">
		<div id="social-full-bg" class="social-card full-height"></div>
	  </div>
	</section>
  
	<section class="web-section">
	  <div id="web-left">
		<div id="web-full-bg" class="web-card full-height"></div>
	  </div>
	  <div id="web-right">
		<div class="web-card half-height">
		  <h2 class="web-title">{{ $t('services.web_title') }}</h2>
		  <p class="web-description">{{ $t('services.web_description') }}</p>
		</div>
		<div id="web-half-bg" class="web-card half-height"></div>
	  </div>
	</section>
  
	<section class="photography-section">
	  <div id="photography-left">
		<div class="photography-card half-height">
		  <h2 class="photography-title">{{ $t('services.photography_title') }}</h2>
		  <p class="photography-description">{{ $t('services.photography_description') }}</p>
		</div>
		<div id="photography-half-bg" class="photography-card half-height"></div>
	  </div>
	  <div id="photography-right">
		<div id="photography-full-bg" class="photography-card full-height"></div>
	  </div>
	</section>
  
	<section class="send-info-section">
	  <h2 class="send-info-title">{{ $t('services.send_info_title_1') }}</h2>
	  <h2 class="send-info-title">{{ $t('services.send_info_title_2') }}</h2>
	  <div class="send-info-line">
		<input type="email" id="send-info-email" name="email" :placeholder="$t('services.send_info_placeholder')">
		<button id="send-info-button">{{ $t('services.send_info_button') }}</button>
	  </div>
	</section>
  
	<section class="faq-section">
	  <div class="faq-container">
		<div class="faq-top">
		  <h1 class="faq-title">{{ $t('services.faq_title') }}</h1>
		</div>
		<div class="faq-questions">
		  <div class="line"></div>
		  <div class="faq">
			<div class="faq-question">{{ $t('services.faq_question_1') }}</div>
			<div class="faq-answer">{{ $t('services.faq_answer_1') }}</div>
		  </div>
		  <div class="line"></div>
		  <div class="faq">
			<div class="faq-question">{{ $t('services.faq_question_2') }}</div>
			<div class="faq-answer">{{ $t('services.faq_answer_2') }}</div>
		  </div>
		  <div class="line"></div>
		  <div class="faq">
			<div class="faq-question">{{ $t('services.faq_question_3') }}</div>
			<div class="faq-answer">{{ $t('services.faq_answer_3') }}</div>
		  </div>
		  <div class="line"></div>
		  <div class="faq">
			<div class="faq-question">{{ $t('services.faq_question_4') }}</div>
			<div class="faq-answer">{{ $t('services.faq_answer_4') }}</div>
		  </div>
		  <div class="line"></div>
		  <div class="faq">
			<div class="faq-question">{{ $t('services.faq_question_5') }}</div>
			<div class="faq-answer">{{ $t('services.faq_answer_5') }}</div>
		  </div>
		  <div class="line"></div>
		  <div class="faq">
			<div class="faq-question">{{ $t('services.faq_question_6') }}</div>
			<div class="faq-answer">{{ $t('services.faq_answer_6') }}</div>
		  </div>
		  <div class="line"></div>
		  <div class="faq">
			<div class="faq-question">{{ $t('services.faq_question_7') }}</div>
			<div class="faq-answer">{{ $t('services.faq_answer_7') }}</div>
		  </div>
		  <div class="line"></div>
		</div>
	  </div>
	</section>
  </template>
  
  <script>
  export default {
	name: 'Services',
	methods: {
	  goToPage(url) {
		window.location.href = url;
	  }
	}
  };
  </script>
  