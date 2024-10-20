<template>
	<section class="celebrating-section">
	  <h2 class="celebrating-small-title">{{ $t('mywork.celebrating_expertise') }}</h2>
	  <h2 class="celebrating-small-title-2">{{ $t('mywork.passion_for_design') }}</h2>
	  <div id="discover-title-line">
		<h1 class="discover-title">{{ $t('mywork.discover_projects') }}</h1>
	  </div>
	</section>
  
	<section class="portfolio1-section">
	  <div id="portfolio1-left">
		<a href="https://www.behance.net/gallery/205211545/Eye-Need-Them-Branding-Packaging" target="_blank">
		  <div id="portfolio1-half-bg-up" class="portfolio1-card half-height"></div>
		</a>
		<a href="https://www.behance.net/gallery/205211545/Eye-Need-Them-Branding-Packaging" target="_blank">
		  <div id="portfolio1-half-bg" class="portfolio1-card half-height"></div>
		</a>
	  </div>
	  <div id="portfolio1-right">
		<a href="https://www.behance.net/gallery/205210763/Natajoma-Branding-Photography" target="_blank">
		  <div id="portfolio1-full-bg" class="portfolio1-card full-height"></div>
		</a>
	  </div>
	</section>
  
	<section class="portfolio2-section">
	  <div id="portfolio2-left">
		<a href="https://www.behance.net/gallery/205211545/Eye-Need-Them-Branding-Packaging" target="_blank">
		  <div id="portfolio2-full-bg" class="portfolio2-card full-height"></div>
		</a>
	  </div>
	  <div id="portfolio2-right">
		<a href="https://www.behance.net/gallery/205211207/Tidy-Home-Branding-Social-Media" target="_blank">
		  <div id="portfolio2-half-bg-up" class="portfolio2-card half-height"></div>
		</a>
		<a href="https://www.behance.net/gallery/202877219/Moka-Branding" target="_blank">
		  <div id="portfolio2-half-bg" class="portfolio2-card half-height"></div>
		</a>
	  </div>
	</section>
  
	<section class="work-together-section">
	  <div id="work-together-button-area">
		<button class="work-together-button-1" @click="goToPage('https://www.behance.net/nataliavillalo2#')">{{ $t('mywork.view_on_behance') }}</button>
	  </div>
	  <h2 class="work-together-title">{{ $t('mywork.want_to_work_together') }}</h2>
	  <p class="work-together-text">{{ $t('mywork.ready_to_start_project_1') }}</p>
	  <p class="work-together-text">{{ $t('mywork.ready_to_start_project_2') }}</p>
	  <button class="work-together-button" @click="goToPage('enquirenow.html')">{{ $t('mywork.get_started') }}</button>
	</section>
  </template>
  
  <script>
  export default {
	name: 'MyWork',
	methods: {
	  goToPage(url) {
		window.location.href = url;
	  }
	}
  };
  </script>
  