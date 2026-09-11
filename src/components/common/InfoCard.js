export function createInfoCard({ icon, title, description }) {
  return `
    <article
      class="
        group relative flex flex-col gap-4 rounded-2xl border border-[#E7E3DC]
        bg-white p-6 shadow-[0_8px_30px_rgba(24,24,24,.04)]
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-[#0B6E4F]/30 hover:shadow-[0_18px_40px_rgba(11,110,79,.10)]
      "
    >
      <div
        class="
          flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
          border border-[#E7E3DC] text-[#0B6E4F]
          transition-all duration-300 ease-out
          group-hover:border-[#0B6E4F] group-hover:bg-[#0B6E4F] group-hover:text-white
        "
      >
        <i data-lucide="${icon}" class="h-5 w-5"></i>
      </div>
      <div>
        <h3 class="font-serif text-[18px] leading-snug text-[#1B1B1B]">${title}</h3>
        <p class="mt-2 text-[14px] leading-6 text-[#666666]">${description}</p>
      </div>
    </article>
  `;
}
