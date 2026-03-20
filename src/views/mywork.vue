<template>
	<div class="bio">
		<div class="image-container">
			<a href="#">
				<img src="@/mywork.webp" id="home-img" alt="Bio Image">
			</a>
		</div>
		<div class="content-container-portfolio">
			<h1 class="bio-title">{{ $t('mywork.branding') }}</h1>
			<h1 class="bio-title">{{ $t('mywork.create') }}</h1>
			<h1 class="bio-title">{{ $t('mywork.strategy') }}</h1>
			<h1 class="bio-title">{{ $t('mywork.creativity') }}</h1>
			<p class="text-box">{{ $t('mywork.text_box') }}</p>
			<a href="https://www.behance.net/nataliavillalo2#"><button class="button">{{
				$t('mywork.portfolio') }}</button></a>
		</div>
	</div>

	<section class="portfolio1-section">
		<div id="portfolio1-left">
			<a href="https://www.behance.net/gallery/242512125/Pikoli-Branding-Naming" target="_blank">
				<div id="portfolio1-half-bg-up" class="portfolio1-card half-height"></div>
			</a>
			<a href="https://www.behance.net/gallery/243102755/SwiftCare-Branding" target="_blank">
				<div id="portfolio1-half-bg" class="portfolio1-card half-height"></div>
			</a>
		</div>
		<div id="portfolio1-right">
			<a href="https://www.behance.net/gallery/205210763/Natajoma-Branding-Photography" target="_blank">

				<div id="portfolio1-half-bg-up2" class="portfolio1-card half-height"></div>
			</a>
			<a href="https://www.behance.net/gallery/242722165/The-Polyglocat-Branding" target="_blank">
				<div id="portfolio1-half-bg2" class="portfolio1-card half-height"></div>
			</a>
		</div>
	</section>

	<section class="portfolio2-section">
		<div id="portfolio2-left">
			<a href="https://www.behance.net/gallery/243096745/Oseo-Branding" target="_blank">
				<div id="portfolio1-half-bg-up3" class="portfolio1-card half-height"></div>
			</a>
		</div>
		<div id="portfolio2-right">
			<a href="https://www.behance.net/gallery/242962323/No-Worries-Branding-Diseno-Web" target="_blank">
				<div id="portfolio1-half-bg3" class="portfolio1-card half-height"></div>
			</a>
		</div>
	</section>

	<section class="work-together-section-mw">
		<div id="work-together-button-area-mw">
			<button class="work-together-button-1-mw"><a href="https://www.behance.net/nataliavillalo2#"
					target="_blank">{{ $t('mywork.view_on_behance') }}</a></button>
		</div>
		<h2 class="work-together-title-mw">{{ $t('mywork.want_to_work_together') }}</h2>
		<p class="work-together-text-mw">{{ $t('mywork.ready_to_start_project_1') }} {{
			$t('mywork.ready_to_start_project_2') }}</p>
		<a href="https://www.behance.net/nataliavillalo2#"><button class="work-together-button-mw">{{
			$t('mywork.get_started') }}</button></a>
	</section>
</template>

<script>
import "../assets/css/mywork.css";
export default {
	name: 'MyWork',
	methods: {
		goToPage(url) {
			window.location.href = url;
		}
	}
};
</script>