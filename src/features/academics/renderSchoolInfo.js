import { SCHOOL_INFO_NOTES } from "../../constants/academics.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";

export function renderSchoolInfo() {
  const container = document.getElementById("schoolInfoSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-[#FBF8F1]">
      <div class="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({ badge: SCHOOL_INFO_NOTES.badge, title: SCHOOL_INFO_NOTES.title })}
        </div>

        <div class="reveal mt-12 grid gap-5 sm:grid-cols-3">
          ${SCHOOL_INFO_NOTES.notes
            .map(
              (note) => `
            <div class="rounded-2xl border border-[#E7E3DC] bg-white p-6 text-center">
              <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B6E4F]/10 text-[#0B6E4F]">
                <i data-lucide="${note.icon}" class="h-6 w-6"></i>
              </div>
              <h3 class="mt-4 font-serif text-[16px] text-[#1B1B1B]">${note.title}</h3>
              <p class="mt-2 text-[13.5px] leading-6 text-[#666666]">${note.description}</p>
            </div>`
            )
            .join("")}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
