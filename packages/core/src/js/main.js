import accordionGenerator from "./accordion/generator.js";
import alertGenerator from "./alert/generator.js";
import carouselGenerator from "./carousel/generator.js";
import navigationGenerator from "./navigation/generator.js";
import disclosureGenerator from "./disclosure/generator.js";

document.addEventListener("DOMContentLoaded", () => {
  accordionGenerator();
  alertGenerator();
  carouselGenerator();
  navigationGenerator();
  disclosureGenerator();
});
