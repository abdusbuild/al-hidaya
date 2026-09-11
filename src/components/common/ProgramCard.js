export function createProgramCard({ icon, stage, classes, title, description, subjects }) {
  return `
    <article
      class="
        flex flex-col gap-4 rounded-2xl border border-[#E7E3DC] bg-white p-7
        shadow-[0_8px_30px_rgba(24,24,24,.04)] transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,110,79,.10)]
      "
    >
      <div class="flex items-center gap-4">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B6E4F]/10 text-[#0B6E4F]">
          <i data-lucide="${icon}" class="h-6 w-6"></i>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wide text-[#E3A73B]">${stage}</span>
          <h3 class="font-serif text-[19px] text-[#1B1B1B]">${title || classes}</h3>
        </div>
      </div>
      ${description ? `<p class="text-[14px] leading-6 text-[#666666]">${description}</p>` : ""}
      ${
        subjects && subjects.length
          ? `<ul class="mt-1 flex flex-col gap-2">
              ${subjects
                .map(
                  (s) => `
                <li class="flex items-start gap-2 text-[13.5px] leading-5 text-[#444444]">
                  <i data-lucide="check-circle-2" class="mt-0.5 h-4 w-4 shrink-0 text-[#0B6E4F]"></i>
                  <span>${s}</span>
                </li>`
                )
                .join("")}
            </ul>`
          : ""
      }
    </article>
  `;
}
