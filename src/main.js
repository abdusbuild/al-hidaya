import { initNavbar } from "./features/navbar/index.js";
import { initRevealAnimations } from "./features/animations/reveal.js";

import { initHomePage } from "./pages/homepage.js";
import { initAboutPage } from "./pages/aboutpage.js";
import { initAcademicsPage } from "./pages/academicspage.js";
import { initAdmissionsPage } from "./pages/admissionspage.js";
import { initGalleryPage } from "./pages/gallerypage.js";
import { initContactPage } from "./pages/contactpage.js";

import { createFooter, initFooterYear } from "./components/footer/index.js";

document.addEventListener("DOMContentLoaded", () => {
  // Global
  initNavbar();

  const page = document.body.dataset.page;

  switch (page) {
    case "home":
      initHomePage();
      break;

    case "about":
      initAboutPage();
      break;

    case "academics":
      initAcademicsPage();
      break;

    case "admissions":
      initAdmissionsPage();
      break;

    case "gallery":
      initGalleryPage();
      break;

    case "contact":
      initContactPage();
      break;
  }

  // Footer
  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = createFooter();
    window.lucide?.createIcons();
    initFooterYear();
  }

  initRevealAnimations();
});
