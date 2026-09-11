import { GALLERY_CTA } from "../../constants/gallery.js";
import { SCHOOL } from "../../constants/navigation.js";
import { createButton } from "../../components/common/Button.js";
import { createIcon } from "../../components/common/Icon.js";

export function renderGalleryCTA() {
  const container = document.getElementById("galleryCtaSection");
  if (!container) return;

  container.innerHTML = `
    <section class="relative overflow-hidden bg-[#0B6E4F] pattern-bg">
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B6E4F] to-[#084a35]"></div>
      <div class="relative mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <div class="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
          ${createIcon("instagram", "h-7 w-7")}
        </div>
        <h2 class="font-serif text-[24px] text-white sm:text-[30px]">${GALLERY_CTA.title}</h2>
        <p class="max-w-xl text-[15px] leading-7 text-white/85">${GALLERY_CTA.description}</p>
        ${createButton({ label: GALLERY_CTA.label, href: SCHOOL.instagram, variant: "secondary", icon: "arrow-up-right", target: "_blank" })}
      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
