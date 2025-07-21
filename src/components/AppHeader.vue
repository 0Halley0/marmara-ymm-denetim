<template>
  <header class="navbar">
    <nav>
      <ul class="nav-links">
        <li><a href="#hero">Ana Sayfa</a></li>
        <li><a href="#about">Hakkında</a></li>
        <li><a href="#services">Hizmetler</a></li>
        <li><a href="#team-members">Takım Üyeleri</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
      <button @click="toggleTheme" class="theme-toggle">
        {{ theme === "light" ? "🌙 Karanlık" : "☀️ Açık" }}
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

const theme = ref(localStorage.getItem("theme") || "light");

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
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  color: var(--text-navbar, white);
  text-decoration: none;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}

.theme-toggle {
  background: transparent;
  border: 1px solid var(--text-navbar, white);
  color: var(--text-navbar, white);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
