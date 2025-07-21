<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import TeamMembersSection from "./components/TeamMembersSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>

<template>
  <div id="app">
    <AppHeader />

    <main>
      <section id="hero" class="section">
        <HeroSection />
      </section>
      <section id="about" class="section">
        <AboutSection />
      </section>
      <section id="services" class="section">
        <ServicesSection />
      </section>
      <section id="team-members" class="section">
        <TeamMembersSection />
      </section>
      <section id="contact" class="section">
        <ContactSection />
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<style>
main {
  padding-top: 80px;
}

.section {
  min-height: 100vh;
  width: 100vw;
  padding: 2rem;
  border-bottom: 1px solid #ccc;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  width: 100%;
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
