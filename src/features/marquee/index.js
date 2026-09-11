import { createHighlightsMarquee } from "../../components/marquee/index.js";

export function initMarquee() {
  const root = document.getElementById("marqueeRoot");
  if (!root) return;

  root.innerHTML = createHighlightsMarquee();

  window.lucide?.createIcons();
}
