const TONES = {
  green: "from-[#0B6E4F] to-[#0E8A63]",
  gold: "from-[#E3A73B] to-[#C98a24]",
};

export function createGalleryCard({ icon, tone = "green", title, description }) {
  return `
    <article
      class="
        group relative overflow-hidden rounded-2xl
        shadow-[0_8px_30px_rgba(24,24,24,.06)]
        transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(24,24,24,.12)]
      "
    >
      <div class="relative flex h-56 flex-col justify-between bg-gradient-to-br ${TONES[tone] || TONES.green} p-6 pattern-bg">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
          <i data-lucide="${icon}" class="h-6 w-6"></i>
        </div>
        <div class="relative">
          <h3 class="font-serif text-[19px] text-white">${title}</h3>
          <p class="mt-1 text-[13.5px] leading-5 text-white/85">${description}</p>
        </div>
      </div>
    </article>
  `;
}
