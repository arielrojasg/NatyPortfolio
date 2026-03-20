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

	<section id="enquirenow_form">
		<form @submit.prevent="handleSubmit">
			<label class="enquirenow_label" for="firstName">{{ $t('enquirenow.name') }}</label>
			<div class="form-group">
				<input type="text" id="firstName" v-model="formData.firstName" required
					:placeholder="$t('enquirenow.first_name_placeholder')">
				<input type="text" id="lastName" v-model="formData.lastName" required
					:placeholder="$t('enquirenow.last_name_placeholder')">
			</div>

			<label class="enquirenow_label" for="email">{{ $t('enquirenow.email') }}</label>
			<input type="email" id="email" v-model="formData.email" required
				:placeholder="$t('enquirenow.email_placeholder')">

			<label class="enquirenow_label">
				{{ $t('enquirenow.alternate_contact') }}
			</label>

			<VueTelInput v-model="formData.contact" @onInput="handlePhone" defaultCountry="CR"
				:onlyCountries="allowedCountries" :inputOptions="{ nationalMode: false, SearchBox: true }"
				:dropdownOptions="{ showDialCodeInSelection: true, showFlags: true }"
				:placeholder="$t('enquirenow.alternate_contact_placeholder')" />

			<label class="enquirenow_label" for="businessName">{{ $t('enquirenow.business_name') }}</label>
			<input type="text" id="businessName" v-model="formData.businessName" required
				:placeholder="$t('enquirenow.business_name_placeholder')">

			<label class="enquirenow_label" for="location">{{ $t('enquirenow.location') }}</label>
			<input type="text" id="location" v-model="formData.location" required
				:placeholder="$t('enquirenow.location_placeholder')">

			<label class="enquirenow_label" for="website">{{ $t('enquirenow.website') }}</label>
			<input type="text" id="website" v-model="formData.website"
				:placeholder="$t('enquirenow.website_placeholder')">

			<label class="enquirenow_label" for="aboutYou">{{ $t('enquirenow.about_you') }}</label>
			<textarea id="aboutYou" v-model="formData.aboutYou" rows="4" required
				:placeholder="$t('enquirenow.about_you_placeholder')"></textarea>

			<label class="enquirenow_label" for="additionalInfo">{{ $t('enquirenow.additional_info') }}</label>
			<textarea id="additionalInfo" v-model="formData.additionalInfo" rows="4" required
				:placeholder="$t('enquirenow.additional_info_placeholder')"></textarea>

			<label class="enquirenow_label">{{ $t('enquirenow.service_looking_for') }}</label>
			<div class="form-group-checkbox">
				<label v-for="(service, index) in services" :key="index" class="enquirenow_label">
					<input type="checkbox" v-model="formData.services" :value="$t(`enquirenow.${service}`)">
					{{ $t(`enquirenow.${service}`) }}
				</label>
			</div>

			<div id="other">
				<label class="enquirenow_label" for="other">{{ $t('enquirenow.other_specify') }}</label>
				<input type="text" v-model="formData.businessName" :placeholder="$t('enquirenow.other_placeholder')">
			</div>

			<label class="enquirenow_label" for="budget">{{ $t('enquirenow.budget') }}</label>
			<select id="budget" required v-model="formData.budget">
				<option value="" disabled selected>{{ $t('enquirenow.budget_placeholder') }}</option>
				<option value="Menos de $800">{{ $t('enquirenow.budget-1') }}</option>
				<option value="$800-$1500">{{ $t('enquirenow.budget-2') }}</option>
				<option value="$1500-$2500">{{ $t('enquirenow.budget-3') }}</option>
				<option value="Más de $2500">{{ $t('enquirenow.budget-4') }}</option>
			</select>

			<label class="enquirenow_label">{{ $t('enquirenow.how_hear_about_me') }}</label>
			<div class="form-group-checkbox">
				<label v-for="(source, index) in sources" :key="index" class="enquirenow_label">
					<input type="checkbox" v-model="formData.sources" :value="source">
					{{ $t(`enquirenow.${source}`) }}
				</label>
			</div>

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
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css'

export default {
	name: "EnquireNow",
	components: {
		VueTelInput
	},
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
				other: "",
				budget: "",
				sources: [],
				additionalInfo: "",
			},
			sent: false,
			services: ["branding", "packaging", "social_media", "web_design", "photography", "other"],
			sources: ["instagram", "linkedin", "tiktok", "behance", "referral"],
			allowedCountries: [
				// Americas
				"US", "CA", "MX", "CR", "PA", "GT", "HN", "SV", "NI", "BZ",
				"CO", "AR", "BR", "CL", "PE", "UY", "PY", "BO", "EC", "VE", "GY", "SR", "PR", "DO",

				// Europe
				"ES", "FR", "DE", "IT", "PT", "NL", "BE", "CH", "AT", "SE", "NO", "DK", "FI",
				"IE", "PL", "CZ", "HU", "GR", "RO", "HR", "SK", "SI", "EE", "LV", "LT",
				"LU", "IS", "MT", "CY", "AL", "RS", "BA", "ME", "MK", "BG", "UA",

				// Oceania
				"AU", "NZ", "FJ", "PG", "SB", "VU", "WS", "TO"
			]

		};
	},
	methods: {
		const handlePhone = (_, phoneObject) => {
			this.formData.contact = phoneObject.number
		},
		handleSubmit() {
			// Check if at least one service is selected
			if (this.formData.services.length === 0 || this.formData.sources.length === 0) {
				return;
			} else {
				this.sendEmail();
				this.resetForm();
			}

		},
		resetForm() {
			this.formData.firstName = "";
			this.formData.lastName = "";
			this.formData.email = "";
			this.formData.businessName = "";
			this.formData.contact = "";
			this.formData.location = "";
			this.formData.website = "";
			this.formData.aboutYou = "";
			this.formData.services = [];
			this.formData.other = "";
			this.formData.budget = "";
			this.formData.sources = [];
			this.formData.additionalInfo = "";
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