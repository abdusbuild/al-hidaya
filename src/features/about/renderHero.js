import { ABOUT_HERO } from "../../constants/about.js";
import { createPageHero } from "../../components/common/PageHero.js";

export function renderHero() {
  const container = document.getElementById("pageHero");
  if (!container) return;

  container.innerHTML = createPageHero(ABOUT_HERO);
  window.lucide?.createIcons();
}
