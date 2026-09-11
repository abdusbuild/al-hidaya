export function createPageHero({ badge, title, subtitle }) {
  return `
    <section class="relative overflow-hidden bg-[#0B6E4F] pattern-bg">
      <div class="absolute inset-0 bg-gradient-to-br from-[#0B6E4F] via-[#0B6E4F]/95 to-[#084a35]"></div>

      <div class="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        ${
          badge
            ? `<span class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                ${badge}
              </span>`
            : ""
        }
        <h1 class="mt-5 font-serif text-[32px] leading-tight text-white sm:text-[42px] lg:text-[50px]">
          ${title}
        </h1>
        ${subtitle ? `<p class="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/85 sm:text-[16px]">${subtitle}</p>` : ""}
      </div>
    </section>
  `;
}
