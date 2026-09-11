import { ELIGIBILITY, DOCUMENTS_REQUIRED } from "../../constants/admissions.js";

function renderList(items) {
  return `
    <ul class="flex flex-col gap-3">
      ${items
        .map(
          (item) => `
        <li class="flex items-start gap-3 text-[14.5px] leading-6 text-[#333333]">
          <i data-lucide="check-circle-2" class="mt-0.5 h-5 w-5 shrink-0 text-[#0B6E4F]"></i>
          <span>${item}</span>
        </li>`
        )
        .join("")}
    </ul>
  `;
}

export function renderEligibilityAndDocs() {
  const container = document.getElementById("eligibilitySection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-[#FBF8F1]">
      <div class="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">

          <div class="reveal rounded-2xl border border-[#E7E3DC] bg-white p-8">
            <span class="inline-flex items-center gap-2 rounded-full border border-[#0B6E4F]/20 bg-[#0B6E4F]/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#0B6E4F]">
              ${ELIGIBILITY.badge}
            </span>
            <h3 class="mt-4 font-serif text-[22px] text-[#1B1B1B]">${ELIGIBILITY.title}</h3>
            <div class="mt-5">${renderList(ELIGIBILITY.points)}</div>
          </div>

          <div class="reveal rounded-2xl border border-[#E7E3DC] bg-white p-8">
            <span class="inline-flex items-center gap-2 rounded-full border border-[#E3A73B]/30 bg-[#E3A73B]/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#C98a24]">
              ${DOCUMENTS_REQUIRED.badge}
            </span>
            <h3 class="mt-4 font-serif text-[22px] text-[#1B1B1B]">${DOCUMENTS_REQUIRED.title}</h3>
            <div class="mt-5">${renderList(DOCUMENTS_REQUIRED.documents)}</div>
          </div>

        </div>
      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
