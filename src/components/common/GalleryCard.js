const TONES = {
  green: "from-[#0B6E4F] to-[#0E8A63]",
  gold: "from-[#E3A73B] to-[#C98a24]",
};

export function createGalleryCard({ image, icon, tone = "green", title, description }, lightboxIndex = null) {
  const background = image
    ? `<img src="${image}" alt="${title}" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
       <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0"></div>`
    : `<div class="absolute inset-0 bg-gradient-to-br ${TONES[tone] || TONES.green} pattern-bg"></div>
       <div class="absolute inset-0 bg-black/10"></div>`;

  const clickableAttrs =
    lightboxIndex !== null
      ? `data-lightbox-index="${lightboxIndex}" role="button" tabindex="0" aria-label="View photo: ${title}"`
      : "";

  return `
    <article
      ${clickableAttrs}
      class="
        group relative overflow-hidden rounded-2xl
        shadow-[0_8px_30px_rgba(24,24,24,.06)]
        transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(24,24,24,.12)]
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3A73B]
        ${lightboxIndex !== null ? "cursor-pointer" : ""}
      "
    >
      <div class="relative flex h-64 flex-col justify-between p-6 sm:h-72">
        ${background}
        <div class="relative flex items-center justify-between">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
            <i data-lucide="${icon}" class="h-6 w-6"></i>
          </div>
          ${
            lightboxIndex !== null
              ? `<div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <i data-lucide="expand" class="h-5 w-5"></i>
                </div>`
              : ""
          }
        </div>
        <div class="relative">
          <h3 class="font-serif text-[19px] text-white">${title}</h3>
          <p class="mt-1 text-[13.5px] leading-5 text-white/85">${description}</p>
        </div>
      </div>
    </article>
  `;
}
