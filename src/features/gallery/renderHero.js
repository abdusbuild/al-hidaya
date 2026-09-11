import { GALLERY_HERO } from "../../constants/gallery.js";
import { createPageHero } from "../../components/common/PageHero.js";

export function renderHero() {
  const container = document.getElementById("pageHero");
  if (!container) return;

  container.innerHTML = createPageHero(GALLERY_HERO);
  window.lucide?.createIcons();
}
