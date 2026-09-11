import { CONTACT_HERO } from "../../constants/contact.js";
import { createPageHero } from "../../components/common/PageHero.js";

export function renderHero() {
  const container = document.getElementById("pageHero");
  if (!container) return;

  container.innerHTML = createPageHero(CONTACT_HERO);
  window.lucide?.createIcons();
}
