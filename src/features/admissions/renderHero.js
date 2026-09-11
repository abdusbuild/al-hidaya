import { ADMISSIONS_HERO } from "../../constants/admissions.js";
import { createPageHero } from "../../components/common/PageHero.js";

export function renderHero() {
  const container = document.getElementById("pageHero");
  if (!container) return;

  container.innerHTML = createPageHero(ADMISSIONS_HERO);
  window.lucide?.createIcons();
}
