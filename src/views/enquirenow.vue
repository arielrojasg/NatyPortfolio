<template>
	<section id="photo-section">
	  <div id="photo"></div>
	  <div class="scrolling-text-enquirenow">
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
	</section>
  
	<section class="brand-impact-section">
	  <div class="brand-impact-left">
		<h2 class="brand-impact-title">{{ $t('enquirenow.your_story') }}</h2>
	  </div>
	  <div class="brand-impact-right">
		<p class="brand-impact-text">{{ $t('enquirenow.authentic_brands') }}</p>
		<hr class="brand-impact-line">
		<p class="brand-impact-description">{{ $t('enquirenow.fill_form') }}</p>
	  </div>
	</section>
  
	<!-- <section id="enquirenow_form">
	  <form>
		<label class="enquirenow_label" for="firstName">{{ $t('enquirenow.name') }}</label>
		<div class="form-group">
		  <input type="text" id="firstName" name="firstName" :placeholder="$t('enquirenow.first_name_placeholder')">
		  <input type="text" id="lastName" name="lastName" :placeholder="$t('enquirenow.last_name_placeholder')">
		</div>
  
		<label class="enquirenow_label" for="email">{{ $t('enquirenow.email') }}</label>
		<input type="email" id="email" name="email" :placeholder="$t('enquirenow.email_placeholder')">
  
		<label class="enquirenow_label" for="businessName">{{ $t('enquirenow.business_name') }}</label>
		<input type="text" id="businessName" name="businessName" :placeholder="$t('enquirenow.business_name_placeholder')">
  
		<label class="enquirenow_label" for="contact">{{ $t('enquirenow.alternate_contact') }}</label>
		<input type="text" id="contact" name="contact" :placeholder="$t('enquirenow.alternate_contact_placeholder')">
  
		<label class="enquirenow_label" for="location">{{ $t('enquirenow.location') }}</label>
		<input type="text" id="location" name="location" :placeholder="$t('enquirenow.location_placeholder')">
  
		<label class="enquirenow_label" for="website">{{ $t('enquirenow.website') }}</label>
		<input type="text" id="website" name="website" :placeholder="$t('enquirenow.website_placeholder')">
  
		<label class="enquirenow_label" for="aboutYou">{{ $t('enquirenow.about_you') }}</label>
		<textarea id="aboutYou" name="aboutYou" rows="4" :placeholder="$t('enquirenow.about_you_placeholder')"></textarea>
  
		<label class="enquirenow_label">{{ $t('enquirenow.service_looking_for') }}</label>
		<div class="form-group-checkbox">
		  <label class="enquirenow_label" for="brightEssentials">
			<input type="checkbox" id="brightEssentials" name="service">
			{{ $t('enquirenow.branding') }}
		  </label>
		  <label class="enquirenow_label" for="collaterals">
			<input type="checkbox" id="collaterals" name="service">
			{{ $t('enquirenow.collaterals') }}
		  </label>
		  <label class="enquirenow_label" for="packaging">
			<input type="checkbox" id="packaging" name="service">
			{{ $t('enquirenow.packaging') }}
		  </label>
		  <label class="enquirenow_label" for="webDesign">
			<input type="checkbox" id="webDesign" name="service">
			{{ $t('enquirenow.web_design') }}
		  </label>
		  <label class="enquirenow_label" for="photography">
			<input type="checkbox" id="photography" name="service">
			{{ $t('enquirenow.photography') }}
		  </label>
		  <label class="enquirenow_label" for="socials">
			<input type="checkbox" id="socials" name="service">
			{{ $t('enquirenow.social_media') }}
		  </label>
		  <label class="enquirenow_label" for="other">
			<input type="checkbox" id="other" name="service">
			{{ $t('enquirenow.other') }}
		  </label>
		</div>
  
		<label class="enquirenow_label" for="budget">{{ $t('enquirenow.budget') }}</label>
		<select id="budget" name="budget">
			<option value="" disabled selected>{{ $t('enquirenow.budget_placeholder') }}</option>
			<option value="menos-500">{{ $t('enquirenow.budget-1') }}</option>
			<option value="500-1000">{{ $t('enquirenow.budget-2') }}</option>
			<option value="mas-1000">{{ $t('enquirenow.budget-3') }}</option>
		</select>  

		<label class="enquirenow_label">{{ $t('enquirenow.how_hear_about_me') }}</label>
		<div class="form-group-checkbox">
		  <label class="enquirenow_label" for="instagram">
			<input type="checkbox" id="instagram" name="source">
			{{ $t('enquirenow.instagram') }}
		  </label>
		  <label class="enquirenow_label" for="linkedin">
			<input type="checkbox" id="linkedin" name="source">
			{{ $t('enquirenow.linkedin') }}
		  </label>
		   <label class="enquirenow_label" for="tiktok">
			<input type="checkbox" id="tiktok" name="source">
			{{ $t('enquirenow.tiktok') }}
		  </label>
		  <label class="enquirenow_label" for="behance">
			<input type="checkbox" id="behance" name="source">
			{{ $t('enquirenow.behance') }}
		  </label>
		  <label class="enquirenow_label" for="referral">
			<input type="checkbox" id="referral" name="source">
			{{ $t('enquirenow.referral') }}
		  </label>
		</div>
  
		<label class="enquirenow_label" for="additionalInfo">{{ $t('enquirenow.additional_info') }}</label>
		<textarea id="additionalInfo" name="additionalInfo" rows="4" :placeholder="$t('enquirenow.additional_info_placeholder')"></textarea>
  
		<p class="note-text">{{ $t('enquirenow.note_text') }}</p>
  
		<div class="button-container">
		  <button type="submit" id="enquirenowbutton">{{ $t('enquirenow.send_info_button') }}</button>
		</div>
	  </form>
	</section> -->
	<section id="enquirenow_form">
    <form @submit.prevent="handleSubmit">
      <label class="enquirenow_label" for="firstName">{{ $t('enquirenow.name') }}</label>
      <div class="form-group">
        <input type="text" id="firstName" v-model="formData.firstName" required :placeholder="$t('enquirenow.first_name_placeholder')">
        <input type="text" id="lastName" v-model="formData.lastName" required :placeholder="$t('enquirenow.last_name_placeholder')">
      </div>

      <label class="enquirenow_label" for="email">{{ $t('enquirenow.email') }}</label>
      <input type="email" id="email" v-model="formData.email" required :placeholder="$t('enquirenow.email_placeholder')">

      <label class="enquirenow_label" for="businessName">{{ $t('enquirenow.business_name') }}</label>
      <input type="text" id="businessName" v-model="formData.businessName" required :placeholder="$t('enquirenow.business_name_placeholder')">

      <label class="enquirenow_label" for="contact">{{ $t('enquirenow.alternate_contact') }}</label>
      <input type="text" id="contact" v-model="formData.contact" required :placeholder="$t('enquirenow.alternate_contact_placeholder')">

      <label class="enquirenow_label" for="location">{{ $t('enquirenow.location') }}</label>
      <input type="text" id="location" v-model="formData.location" required :placeholder="$t('enquirenow.location_placeholder')">

      <label class="enquirenow_label" for="website">{{ $t('enquirenow.website') }}</label>
      <input type="text" id="website" v-model="formData.website" :placeholder="$t('enquirenow.website_placeholder')">

      <label class="enquirenow_label" for="aboutYou">{{ $t('enquirenow.about_you') }}</label>
      <textarea id="aboutYou" v-model="formData.aboutYou" rows="4" required :placeholder="$t('enquirenow.about_you_placeholder')"></textarea>

      <label class="enquirenow_label">{{ $t('enquirenow.service_looking_for') }}</label>
      <div class="form-group-checkbox">
        <label v-for="(service, index) in services" :key="index" class="enquirenow_label">
          <input type="checkbox" v-model="formData.services" :value="$t(`enquirenow.${service}`)">
          {{ $t(`enquirenow.${service}`) }}
        </label>
      </div>

      <label class="enquirenow_label" for="budget">{{ $t('enquirenow.budget') }}</label>
      <select id="budget" required v-model="formData.budget">
        <option value="" disabled selected>{{ $t('enquirenow.budget_placeholder') }}</option>
        <option value="Menos de $600">{{ $t('enquirenow.budget-1') }}</option>
        <option value="$600-$1000">{{ $t('enquirenow.budget-2') }}</option>
        <option value="Más de $1000">{{ $t('enquirenow.budget-3') }}</option>
      </select>

      <label class="enquirenow_label">{{ $t('enquirenow.how_hear_about_me') }}</label>
      <div class="form-group-checkbox">
        <label v-for="(source, index) in sources" :key="index" class="enquirenow_label">
          <input type="checkbox" v-model="formData.sources" :value="source">
          {{ $t(`enquirenow.${source}`) }}
        </label>
      </div>

      <label class="enquirenow_label" for="additionalInfo">{{ $t('enquirenow.additional_info') }}</label>
      <textarea id="additionalInfo" v-model="formData.additionalInfo" rows="4" :placeholder="$t('enquirenow.additional_info_placeholder')"></textarea>

      <p class="note-text">{{ $t('enquirenow.note_text') }}</p>

      <div class="button-container">
        <button type="submit" id="enquirenowbutton" :disabled="sent">
          {{ sent ? $t('enquirenow.sent') : $t('enquirenow.send_info_button') }}
        </button>
      </div>
    </form>
  </section>

	<section class="join-forces-section">
	  <div class="join-forces-left">
		<h2 class="join-forces-title">{{ $t('enquirenow.join_forces_title') }}</h2>
	  </div>
	  <div class="join-forces-right">
		<p class="join-forces-text">{{ $t('enquirenow.join_forces_text') }}</p>
		<p class="join-forces-email"><strong>nvillalobosc29@gmail.com</strong></p>
	  </div>
	</section>
  
	<section id="blank"></section>
</template>
<script>
	import "../assets/css/enquirenow.css";
	
	export default {
	  name: "EnquireNow",
	  data() {
		return {
		  formData: {
			firstName: "",
			lastName: "",
			email: "",
			businessName: "",
			contact: "",
			location: "",
			website: "",
			aboutYou: "",
			services: [],
			budget: "",
			sources: [],
			additionalInfo: "",
		  },
		  sent: false,
		  services: ["branding", "collaterals", "packaging", "web_design", "photography", "social_media", "other"],
		  sources: ["instagram", "linkedin", "tiktok", "behance", "referral"]
		};
	  },
	  methods: {
		handleSubmit() {
			// Check if at least one service is selected
			if (this.formData.services.length === 0 ||  this.formData.sources.length === 0 ) {
				return;
			} else {
				this.sendEmail();
			}
			
		},
		async sendEmail() {	
		  try {
			const response = await fetch("https://naty-portfolio.vercel.app/api/send-email", {
			  method: "POST",
			  headers: { "Content-Type": "application/json" },
			  body: JSON.stringify(this.formData)
			});
	
			const result = await response.json();
			if (result.success) {
			  this.sent = true;
			  console.log("Email sent successfully!");
			} else {
			  console.log("Failed to send email.");
			}
		  } catch (error) {
			console.error("Error:", error);
			alert("An error occurred while sending the email.");
		  } finally {
		  }
		}
	  }
	};
</script>
	
  