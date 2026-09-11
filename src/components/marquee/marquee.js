import { HIGHLIGHTS } from "../../constants/home.js";

function createMarqueeItem({ icon, label }) {
  return `
    <div class="flex shrink-0 items-center gap-2.5 px-6">
      <i data-lucide="${icon}" class="h-4 w-4 shrink-0 text-gold"></i>
      <span class="whitespace-nowrap text-[13px] font-medium uppercase tracking-wide text-white sm:text-sm">${label}</span>
    </div>
  `;
}

function createMarqueeGroup() {
  const dot = '<span class="mx-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" aria-hidden="true"></span>';
  return HIGHLIGHTS.map((h) => createMarqueeItem(h)).join(dot) + dot;
}

export function createHighlightsMarquee() {
  const group = createMarqueeGroup();

  return `
    <section class="relative overflow-hidden bg-primaryDark py-4" aria-label="School highlights">
      <div class="marquee-track flex w-max items-center">
        <div class="flex shrink-0 items-center">${group}</div>
        <div class="flex shrink-0 items-center" aria-hidden="true">${group}</div>
      </div>
    </section>
  `;
}
