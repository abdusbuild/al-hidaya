export function createStepCard({ step, icon, title, description, isLast = false }) {
  return `
    <div class="relative flex gap-5">
      <div class="flex flex-col items-center">
        <div
          class="
            flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl
            bg-[#0B6E4F] text-white shadow-[0_10px_25px_rgba(11,110,79,.25)]
          "
        >
          <i data-lucide="${icon}" class="h-6 w-6"></i>
        </div>
        ${
          isLast
            ? ""
            : `<span class="mt-2 w-px flex-1 border-l-2 border-dashed border-[#0B6E4F]/25"></span>`
        }
      </div>
      <div class="pb-10">
        <span class="text-[12px] font-bold uppercase tracking-wide text-[#E3A73B]">Step ${step}</span>
        <h3 class="mt-1 font-serif text-[19px] text-[#1B1B1B]">${title}</h3>
        <p class="mt-2 max-w-md text-[14px] leading-6 text-[#666666]">${description}</p>
      </div>
    </div>
  `;
}
