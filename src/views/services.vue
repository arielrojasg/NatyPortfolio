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

	<section class="obsessed" id="obsessed-services">
		<div id="obsessed-titles">
			<h1 class="obsessed-title">{{ $t('services.transforming_title_1') }}</h1>
			<h1 class="obsessed-title">{{ $t('services.transforming_title_2') }}</h1>
			<p class="obsessed-subtitle">{{ $t('services.explore_services') }}</p>
		</div>
		<div id="clouds">
			<div class="cloud">
				<h2><a @click="scrollToSection('branding')">{{ $t('services.branding_title') }}</a>
				</h2>
			</div>
			<div class="cloud">
				<h2><a @click="scrollToSection('packaging')" v-html="$t('services.packaging')"></a></h2>

			</div>
			<div class="cloud">
				<h2><a @click="scrollToSection('socialmedia')" v-html="$t('services.social_title')"></a></h2>
			</div>
			<div class="cloud">
				<h2><a @click="scrollToSection('webdev')">{{ $t('services.web_title') }}</a>
				</h2>
			</div>
			<div class="cloud">
				<h2><a @click="scrollToSection('photography')" v-html="$t('services.photography_title')"></a>
				</h2>
			</div>
		</div>
	</section>

	<section class="services-feature-slider">
		<div class="services-feature-inner">
			<div class="services-feature-content">
				<div class="services-feature-track">

					<article class="services-feature-slide" id="branding">
						<h2 class="services-feature-title" v-html="$t('services.services_1_title')"></h2>

						<p class="services-feature-text" v-html="$t('services.services_1_text')"></p>

						<button class="services-feature-cta">
							<router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{
								$t('services.get_quote') }}</router-link>
						</button>
					</article>

				</div>
			</div>
			<div class="services-feature-media">
				<div class="services-feature-track">
					<div class="services-testimonies-media">
						<img src="@/branding1.webp" alt="Proyecto de branding">
						<button class="services-testimonies-arrow services-testimonies-arrow-left"
							aria-label="Anterior"></button>
						<button class="services-testimonies-arrow services-testimonies-arrow-right"
							aria-label="Siguiente"></button>
					</div>
				</div>
			</div>
		</div>
		<div class="services-feature-inner2">
			<div class="services-feature-media">
				<div class="services-testimonies-media">
					<img src="@/stationery1.webp" alt="Proyecto de branding">
					<button class="services-testimonies-arrow services-testimonies-arrow-left"
						aria-label="Anterior"></button>
					<button class="services-testimonies-arrow services-testimonies-arrow-right"
						aria-label="Siguiente"></button>
				</div>

			</div>
			<div class="services-feature-content2">
				<div class="services-feature-track">

					<article class="services-feature-slide" id="packaging">
						<h2 class="services-feature-title2" v-html="$t('services.services_2_title')"></h2>

						<p class="services-feature-text2" v-html="$t('services.services_2_text')"></p>

						<button class="services-feature-cta-whitebg">
							<router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{
								$t('services.get_quote') }}</router-link>
						</button>
					</article>

				</div>
			</div>

		</div>
		<div class="services-feature-inner">
			<div class="services-feature-content">
				<div class="services-feature-track">

					<article class="services-feature-slide" id="socialmedia">
						<h2 class="services-feature-title" v-html="$t('services.services_3_title')"></h2>

						<p class="services-feature-text" v-html="$t('services.services_3_text')"></p>

						<button class="services-feature-cta">
							<router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{
								$t('services.get_quote') }}</router-link>
						</button>
					</article>

				</div>
			</div>
			<div class="services-feature-media">
				<div class="services-feature-track">
					<div class="services-testimonies-media">
						<img src="@/social1.webp" alt="Proyecto de branding">
						<button class="services-testimonies-arrow services-testimonies-arrow-left"
							aria-label="Anterior"></button>
						<button class="services-testimonies-arrow services-testimonies-arrow-right"
							aria-label="Siguiente"></button>
					</div>
				</div>
			</div>
		</div>
		<div class="services-feature-inner2">
			<div class="services-feature-media">
				<div class="services-testimonies-media">
					<img src="@/web1.webp" alt="Proyecto de branding">
					<button class="services-testimonies-arrow services-testimonies-arrow-left"
						aria-label="Anterior"></button>
					<button class="services-testimonies-arrow services-testimonies-arrow-right"
						aria-label="Siguiente"></button>
				</div>

			</div>
			<div class="services-feature-content2">
				<div class="services-feature-track">

					<article class="services-feature-slide" id="webdev">
						<h2 class="services-feature-title2" v-html="$t('services.services_4_title')"></h2>

						<p class="services-feature-text2" v-html="$t('services.services_4_text')"></p>

						<button class="services-feature-cta-whitebg">
							<router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{
								$t('services.get_quote') }}</router-link>
						</button>
					</article>

				</div>
			</div>
		</div>
		<div class="services-feature-inner">
			<div class="services-feature-content">
				<div class="services-feature-track">

					<article class="services-feature-slide" id="photography">
						<h2 class="services-feature-title" v-html="$t('services.services_5_title')"></h2>

						<p class="services-feature-text" v-html="$t('services.services_5_text')"></p>

						<button class="services-feature-cta">
							<router-link :class="{ active: currentPage === 'enquirenow' }" to="/enquirenow">{{
								$t('services.get_quote') }}</router-link>
						</button>
					</article>

				</div>
			</div>
			<div class="services-feature-media">
				<div class="services-feature-track">
					<div class="services-testimonies-media">
						<img src="@/foto1.webp" alt="Proyecto de branding">
						<button class="services-testimonies-arrow services-testimonies-arrow-left"
							aria-label="Anterior"></button>
						<button class="services-testimonies-arrow services-testimonies-arrow-right"
							aria-label="Siguiente"></button>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="work-together-section">
		<h2 class="work-together-title">{{ $t('about.work_together_title') }}</h2>
		<p class="work-together-text">{{ $t('about.work_together_text_1') }} {{ $t('about.work_together_text_2') }}</p>
		<button class="work-together-button"><router-link :class="{ active: currentPage === 'enquirenow' }"
				to="/enquirenow">{{ $t('about.work_together_button') }}</router-link></button>
	</section>
	<section>
	</section>
	<section class="send-info-section">
		<h2 class="send-info-title">{{ $t('about.send_info_title_1') }} </h2>
		<div class="send-info-line">
			<button id="send-info-button"><a
					href="https://drive.google.com/file/d/1ck73iHQvNt7i8gJuluZjnn5kW0x5RTud/view?usp=drive_link"
					target="_blank">{{ $t('about.send_info_button') }}</a></button>
		</div>
	</section>
	<section class="faq-section">
		<div class="faq-container">
			<div class="faq-top">
				<h1 class="faq-title">{{ $t('services.faq_title') }}</h1>
			</div>
			<div class="faq-questions">
				<div class="line-q"></div>
				<div class="faq">
					<div class="faq-question">{{ $t('services.faq_question_1') }}</div>
					<div class="faq-answer">{{ $t('services.faq_answer_1') }}</div>
				</div>
				<div class="line-q"></div>
				<div class="faq">
					<div class="faq-question">{{ $t('services.faq_question_2') }}</div>
					<div class="faq-answer">{{ $t('services.faq_answer_2') }}</div>
				</div>
				<div class="line-q"></div>
				<div class="faq">
					<div class="faq-question">{{ $t('services.faq_question_3') }}</div>
					<div class="faq-answer">{{ $t('services.faq_answer_3') }}</div>
				</div>
				<div class="line-q"></div>
				<div class="faq">
					<div class="faq-question">{{ $t('services.faq_question_4') }}</div>
					<div class="faq-answer">{{ $t('services.faq_answer_4') }}</div>
				</div>
				<div class="line-q"></div>
				<div class="faq">
					<div class="faq-question">{{ $t('services.faq_question_5') }}</div>
					<div class="faq-answer">{{ $t('services.faq_answer_5') }}</div>
				</div>
				<div class="line-q"></div>
				<div class="faq">
					<div class="faq-question">{{ $t('services.faq_question_6') }}</div>
					<div class="faq-answer">{{ $t('services.faq_answer_6') }}</div>
				</div>
				<div class="line-q"></div>
				<div class="faq">
					<div class="faq-question">{{ $t('services.faq_question_7') }}</div>
					<div class="faq-answer">{{ $t('services.faq_answer_7') }}</div>
				</div>
				<div class="line-q"></div>
			</div>
		</div>
	</section>
</template>

<script>
import "../assets/css/services.css";

export default {
	name: 'Services',
	methods: {
		scrollToSection(id) {
			const el = document.getElementById(id)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' })
			}
		}
	},
	mounted() {
		const questions = document.querySelectorAll('.faq-question');
		questions.forEach(question => {
			question.addEventListener('click', () => {
				const answer = question.nextElementSibling;
				answer.classList.toggle('active');
			});
		});

		// SERVICES IMAGE SLIDERS
		const serviceSections = document.querySelectorAll(
			'.services-feature-slider .services-feature-media'
		);
		this.$nextTick(() => {
			serviceSections.forEach(section => {
				const img = section.querySelector('img');
				const prevBtn = section.querySelector('.services-testimonies-arrow-left');
				const nextBtn = section.querySelector('.services-testimonies-arrow-right');

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
				console.log('originalSrc:', originalSrc);
				console.log('match:', match);

				// Dynamically detect how many images exist
				const loadImages = () => {
					const MAX_IMAGES = 6;

					for (let index = 1; index <= MAX_IMAGES; index++) {
						const path = `${baseName}${index}.webp`;
						images.push(path);
					}

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

				nextBtn?.addEventListener('click', () => {
					next();
					resetAutoScroll();
				});

				prevBtn?.addEventListener('click', () => {
					prev();
					resetAutoScroll();
				});

				loadImages();

				if (images.length > 1) {
					startAutoScroll();
				}
			});
		});
	}
};
</script>