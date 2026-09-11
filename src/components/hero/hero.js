import { HERO_SLIDES, HIGHLIGHTS } from "../../constants/home.js";
import { createButton } from "../common/Button.js";
import { createHighlightBadge } from "../common/HighlightBadge.js";

const SLIDE_TONES = [
  "from-[#0B6E4F] via-[#0B6E4F] to-[#084a35]",
  "from-[#0E4A38] via-[#0B6E4F] to-[#0E8A63]",
  "from-[#084a35] via-[#0B6E4F] to-[#0B6E4F]",
];

function createSlide(slide, index) {
  return `
    <div
      class="hero-slide absolute inset-0 flex items-center overflow-hidden bg-gradient-to-br ${SLIDE_TONES[index % SLIDE_TONES.length]} pattern-bg ${
        index === 0 ? "opacity-100 z-20" : "opacity-0 z-10"
      }"
      data-slide="${index}"
    >
      <div class="absolute inset-0 bg-black/15"></div>

      <div
        class="
          pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full
          bg-[#E3A73B]/20 blur-3xl animate-float
        "
      ></div>

      <div class="relative mx-auto flex max-w-7xl flex-col justify-center px-5 sm:px-6 lg:px-8">
        <span
          class="
            inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10
            px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm
          "
        >
          <i data-lucide="sparkles" class="h-3.5 w-3.5 text-[#E3A73B]"></i>
          ${slide.badge}
        </span>

        <h1 class="mt-5 max-w-xl font-serif text-[30px] leading-tight text-white sm:text-[42px] lg:text-[52px]">
          ${slide.title}
        </h1>

        <p class="mt-5 max-w-lg text-[14.5px] leading-7 text-white/85 sm:text-[16px]">
          ${slide.subtitle}
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-4">
          ${createButton({ label: slide.ctaLabel, href: slide.ctaHref, variant: "secondary", icon: "arrow-right" })}
          ${createButton({ label: "Call the School", href: "pages/contact.html", variant: "outline" })}
        </div>
      </div>
    </div>
  `;
}

export function createHero() {
  return `
    <section
      id="hero"
      class="relative h-[86svh] min-h-[560px] max-h-[820px] overflow-hidden md:h-[80vh] lg:h-[85vh]"
    >
      ${HERO_SLIDES.map((slide, i) => createSlide(slide, i)).join("")}

      <div class="absolute inset-x-0 bottom-0 z-30 hidden bg-gradient-to-t from-black/40 to-transparent pb-6 pt-16 sm:block">
        <div class="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-5 sm:px-6 lg:justify-start lg:px-8">
          ${HIGHLIGHTS.map((h) => createHighlightBadge(h)).join("")}
        </div>
      </div>

      <div class="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2" id="heroIndicators">
        ${HERO_SLIDES.map(
          (_, i) => `
          <button
            type="button"
            data-indicator="${i}"
            aria-label="Show slide ${i + 1}"
            class="h-2 rounded-full bg-white/40 transition-all duration-300 ${i === 0 ? "w-8 bg-white" : "w-2"}"
          ></button>`
        ).join("")}
      </div>
    </section>
  `;
}
