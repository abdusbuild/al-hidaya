import { createNavbar } from "../../components/navbar/index.js";
import { initNavbarScroll } from "./scroll.js";
import { initMobileDrawer } from "./mobileDrawer.js";
import { initActiveLink } from "./activeLink.js";

export function initNavbar() {
  const container = document.getElementById("navbar-container");
  if (!container) return;

  container.innerHTML = createNavbar();

  window.lucide?.createIcons();

  initNavbarScroll();
  initMobileDrawer();
  initActiveLink();
}
