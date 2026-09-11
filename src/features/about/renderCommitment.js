import { COMMITMENT } from "../../constants/about.js";
import { SCHOOL } from "../../constants/navigation.js";

export function renderCommitment() {
  const container = document.getElementById("commitmentSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-4xl px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div class="reveal">
          <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0B6E4F]/10 text-[#0B6E4F]">
            <i data-lucide="heart-handshake" class="h-7 w-7"></i>
          </div>
          <span class="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0B6E4F]/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#0B6E4F]">
            ${COMMITMENT.badge}
          </span>
          <h2 class="mt-4 font-serif text-[26px] leading-tight text-[#1B1B1B] sm:text-[32px]">
            ${COMMITMENT.title}
          </h2>
          ${COMMITMENT.paragraphs
            .map((p) => `<p class="mt-5 text-[15px] leading-7 text-[#5B5B5B]">${p}</p>`)
            .join("")}
          <p class="mt-6 font-serif text-[16px] text-[#0B6E4F]">— ${SCHOOL.name}</p>
        </div>
      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
