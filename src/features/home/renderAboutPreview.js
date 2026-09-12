import { ABOUT_PREVIEW } from "../../constants/home.js";
import { createButton } from "../../components/common/Button.js";

export function renderAboutPreview() {
  const container = document.getElementById("aboutPreviewSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

        <div class="reveal relative">
          <div class="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(11,110,79,.20)]">
            <img src="/public/assets/2.png" alt="Students and a teacher in an Al-Hidayah Foundation School classroom" class="absolute inset-0 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B6E4F]/45 via-[#0B6E4F]/0 to-[#0B6E4F]/10"></div>
          </div>
          <div class="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white p-5 shadow-[0_15px_40px_rgba(0,0,0,.12)] sm:block">
            <p class="font-serif text-[15px] text-[#1B1B1B]">"${'ہدایت کا راستہ'}"</p>
            <p class="mt-1 text-[12px] text-[#666666]">The Path of Guidance</p>
          </div>
        </div>

        <div class="reveal">
          <span class="inline-flex items-center gap-2 rounded-full bg-[#0B6E4F]/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#0B6E4F]">
            ${ABOUT_PREVIEW.badge}
          </span>
          <h2 class="mt-4 font-serif text-[26px] leading-tight text-[#1B1B1B] sm:text-[32px] lg:text-[36px]">
            ${ABOUT_PREVIEW.title}
          </h2>
          <p class="mt-5 text-[15px] leading-7 text-[#5B5B5B]">
            ${ABOUT_PREVIEW.description}
          </p>

          <ul class="mt-6 flex flex-col gap-3">
            ${ABOUT_PREVIEW.points
              .map(
                (p) => `
              <li class="flex items-start gap-3 text-[14.5px] leading-6 text-[#333333]">
                <i data-lucide="check-circle-2" class="mt-0.5 h-5 w-5 shrink-0 text-[#0B6E4F]"></i>
                <span>${p}</span>
              </li>`
              )
              .join("")}
          </ul>

          <div class="mt-8">
            ${createButton({ label: ABOUT_PREVIEW.ctaLabel, href: ABOUT_PREVIEW.ctaHref, variant: "primary", icon: "arrow-right" })}
          </div>
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
