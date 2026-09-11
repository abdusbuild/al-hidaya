import { CTA_BANNER } from "../../constants/home.js";
import { createCTABanner } from "../../components/common/CTABanner.js";

export function renderCTA() {
  const container = document.getElementById("ctaSection");
  if (!container) return;

  container.innerHTML = `<div class="reveal">${createCTABanner(CTA_BANNER)}</div>`;

  window.lucide?.createIcons();
}
