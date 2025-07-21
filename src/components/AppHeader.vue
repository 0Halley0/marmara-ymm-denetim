<template>
  <header class="navbar">
    <nav>
      <div class="left-section">
        <button @click="toggleMobileMenu" class="menu-button">
          <font-awesome-icon icon="bars" />
        </button>
      </div>

      <div class="nav-links" :class="{ open: isMobileMenuOpen }">
        <span><a href="#hero" @click="closeMobileMenu">Ana Sayfa</a></span>
        <span><a href="#about" @click="closeMobileMenu">Hakkında</a></span>
        <span><a href="#services" @click="closeMobileMenu">Hizmetler</a></span>
        <span
          ><a href="#team-members" @click="closeMobileMenu"
            >Takım Üyeleri</a
          ></span
        >
        <span><a href="#contact" @click="closeMobileMenu">İletişim</a></span>
      </div>

      <div class="right-section">
        <button @click="toggleTheme" class="theme-toggle">
          <font-awesome-icon :icon="theme === 'light' ? 'moon' : 'sun'" />
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const theme = ref(localStorage.getItem("theme") || "light");
const isMobileMenuOpen = ref(false);

const applyTheme = (themeName: string) => {
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("theme", themeName);
};

watchEffect(() => {
  applyTheme(theme.value);
});

const toggleTheme = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg-navbar, #1c363a);
  color: var(--text-color, white);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 100vw;
}

.left-section,
.right-section {
  display: flex;
  align-items: center;
}

.menu-button,
.theme-toggle {
  background: none;
  color: var(--text-navbar, white);
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-navbar, white);
  font-weight: bold;
}

@media (max-width: 425px) {
  .nav-links {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-navbar, #1c363a);
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    padding: 0;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
  }

  .nav-links.open {
    max-height: 300px;
    opacity: 1;
    padding: 1rem;
    pointer-events: auto;
  }
}

@media (min-width: 426px) {
  .nav-links {
    display: flex !important;
    position: static;
    flex-direction: row;
    align-items: center;
    background: none;
    padding: 0;
  }
}
</style>
