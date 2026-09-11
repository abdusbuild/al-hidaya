// lucide's CDN build no longer ships brand/social glyphs (e.g. "instagram"),
// so those need a hand-drawn inline SVG fallback instead of <i data-lucide>.
const CUSTOM_ICONS = {
  instagram: (className) => `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  `,
};

export function createIcon(name, className = "h-5 w-5") {
  if (CUSTOM_ICONS[name]) {
    return CUSTOM_ICONS[name](className);
  }
  return `<i data-lucide="${name}" class="${className}"></i>`;
}
