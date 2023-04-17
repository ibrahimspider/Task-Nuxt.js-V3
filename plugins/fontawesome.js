import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faTwitch,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
library.add(fas);
library.add(faTwitterSquare, faTwitch, faGithubSquare);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon, {});
});
