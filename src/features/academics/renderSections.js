import { SECTIONS } from "../../constants/academics.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";

export function renderSections() {
  const container = document.getElementById("sectionsSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-[#FBF8F1]">
      <div class="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({ badge: SECTIONS.badge, title: SECTIONS.title, description: SECTIONS.description })}
        </div>

        <div class="reveal mt-12 grid gap-5 sm:grid-cols-2">
          ${SECTIONS.cards
            .map(
              (card) => `
            <div class="flex items-center gap-5 rounded-2xl border border-[#E7E3DC] bg-white p-7">
              <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0B6E4F] text-white">
                <i data-lucide="${card.icon}" class="h-6 w-6"></i>
              </div>
              <div>
                <h3 class="font-serif text-[18px] text-[#1B1B1B]">${card.title}</h3>
                <p class="mt-1.5 text-[14px] leading-6 text-[#666666]">${card.description}</p>
              </div>
            </div>`
            )
            .join("")}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
