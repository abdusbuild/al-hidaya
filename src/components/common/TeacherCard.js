function initials(name) {
  return name
    .replace(/^Md\.\s*/i, "")
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function createTeacherCard({ name, role, subject, classes, qualification }) {
  return `
    <article
      class="
        group relative flex flex-col gap-4 rounded-2xl border border-[#E7E3DC]
        bg-white p-6 shadow-[0_8px_30px_rgba(24,24,24,.04)]
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-[#0B6E4F]/30 hover:shadow-[0_18px_40px_rgba(11,110,79,.10)]
      "
    >
      <div class="flex items-center gap-4">
        <div
          class="
            flex h-14 w-14 shrink-0 items-center justify-center rounded-full
            bg-[#0B6E4F]/10 font-serif text-[17px] text-[#0B6E4F]
            transition-all duration-300 ease-out
            group-hover:bg-[#0B6E4F] group-hover:text-white
          "
        >
          ${initials(name)}
        </div>
        <div>
          <h3 class="font-serif text-[17px] leading-snug text-[#1B1B1B]">${name}</h3>
          ${role ? `<span class="mt-0.5 inline-block text-[12px] font-semibold uppercase tracking-wide text-[#E3A73B]">${role}</span>` : ""}
        </div>
      </div>
      <div class="flex flex-col gap-1.5 border-t border-[#E7E3DC] pt-4 text-[13.5px] leading-6 text-[#5B5B5B]">
        <p><span class="font-medium text-[#1B1B1B]">Subject:</span> ${subject}</p>
        <p><span class="font-medium text-[#1B1B1B]">Class:</span> ${classes}</p>
        <p><span class="font-medium text-[#1B1B1B]">Qualification:</span> ${qualification}</p>
      </div>
    </article>
  `;
}
