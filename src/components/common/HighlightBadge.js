export function createHighlightBadge({ icon, label }) {
  return `
    <div
      class="
        flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10
        px-4 py-2 text-[13px] font-medium text-white backdrop-blur-sm
      "
    >
      <i data-lucide="${icon}" class="h-4 w-4 text-[#E3A73B]"></i>
      <span>${label}</span>
    </div>
  `;
}
