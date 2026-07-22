import accordionGenerator from "./accordion/generator.js";
import alertGenerator from "./alert/generator.js";
import breadcrumbGenerator from "./breadcrumb/generator.js";
import carouselGenerator from "./carousel/generator.js";
import disclosureGenerator from "./disclosure/generator.js";
import navigationGenerator from "./navigation/generator.js";
import tabsGenerator from "./tabs/generator.js";
import tooltipGenerator from "./tooltip/generator.js";

document.addEventListener("DOMContentLoaded", () => {
  accordionGenerator();
  alertGenerator();
  breadcrumbGenerator();
  carouselGenerator();
  disclosureGenerator();
  navigationGenerator();
  tabsGenerator();
  tooltipGenerator();
});
