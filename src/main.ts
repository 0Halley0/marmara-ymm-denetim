import { createApp } from "vue";
import "./style.css";
import "./assets/themes.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faSun, faMoon, faBars, faGithub);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
