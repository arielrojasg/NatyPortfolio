<template>
  <div class="about">
    <div class="about-container">
      <h4 class="about-title">NATALIA VILLALOBOS</h4>
      <h1 class="about-bigger-title">BRAND DESIGNER</h1>
      <p class="about-text">I am an independent brand designer based in Costa Rica. I specialize in creating strategic
        brands, social media content, and unique websites that resonate with your audience. With a keen eye for
        aesthetics and a deep understanding of strategy, my expertise will take your brand from ordinary to exceptional.
      </p>
    </div>
  </div>
  <section class="info-section">
    <div id="info-left">
      <div class="info-card half-height">
        <h2 class="info-title">WHAT I DO</h2>
        <p class="info-description">
          As a brand designer, I craft <span class="colored-text">unique visual identities</span> that captivate and <span class="colored-text">resonate with audiences</span>. I create
          compelling logos, cohesive branding materials, and engaging visual elements that help businesses stand out and
          communicate their essence effectively.
        </p>
      </div>
      <div class="info-card half-height">
        <h2 class="info-title">WHY I DO IT</h2>
        <p class="info-description">
          I am passionate about helping brands <span class="colored-text">tell their stories through design</span>. I believe that a well-designed brand
          can
          <span class="colored-text">transform a business, build trust, and forge meaningful connections</span> with its audience.
        </p>

      </div>
    </div>
    <div id="info-right">
      <div class="info-card full-height">
        <h2 class="info-title">HOW I DO IT</h2>
        <p class="info-description">
          I start with a <span class="colored-text">deep understanding of each client's vision and goals</span>, followed by a thorough <span class="colored-text">research and
            creative exploration</span> process. My approach involves meticulous attention to detail and a commitment to
          delivering high-quality, tailored solutions. Through collaboration and creativity, I ensure that each brand
          design is both visually striking and strategically sound.
        </p>
      </div>
    </div>
  </section>
  <section class="work-together-section">
    <h2 class="work-together-title">WANT ME TO WORK TOGETHER?</h2>
    <p class="work-together-text">If you're ready to start a new dream project, click the button</p>
    <p class="work-together-text">below to fill my enquiry form so we can work together!</p>
    <button class="work-together-button" onclick="window.location.href='enquirenow.html';">Let's Get Started</button>
  </section>
  <section class="send-info-section">
		<h2 class="send-info-title">GET ACCESS TO MY</h2>
		<h2 class="send-info-title">SERVICE GUIDE!</h2>
		<div class="send-info-line">
			<input type="email" id="send-info-email" name="email" placeholder="Email Address">
			<button id="send-info-button">MORE INFO</button>
		</div>
	</section>

</template>
<script>
export default {
  name: 'About',
};
</script>