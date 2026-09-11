import { ACADEMICS_HERO } from "../../constants/academics.js";
import { createPageHero } from "../../components/common/PageHero.js";

export function renderHero() {
  const container = document.getElementById("pageHero");
  if (!container) return;

  container.innerHTML = createPageHero(ACADEMICS_HERO);
  window.lucide?.createIcons();
}
