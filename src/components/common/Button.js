export function createButton({ label, href, variant = "primary", icon, target }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold transition-all duration-300 ease-out";

  const variants = {
    primary:
      "bg-[#0B6E4F] text-white shadow-[0_10px_30px_rgba(11,110,79,0.25)] hover:bg-[#095c41] hover:-translate-y-0.5",
    secondary:
      "bg-[#E3A73B] text-[#1B1B1B] shadow-[0_10px_30px_rgba(227,167,59,0.25)] hover:bg-[#d4972d] hover:-translate-y-0.5",
    outline:
      "border border-white/70 text-white hover:bg-white hover:text-[#0B6E4F]",
    ghost:
      "border border-[#0B6E4F]/20 text-[#0B6E4F] hover:bg-[#0B6E4F]/5",
  };

  const targetAttr = target ? `target="${target}" rel="noopener noreferrer"` : "";

  return `
    <a href="${href}" ${targetAttr} class="${base} ${variants[variant] || variants.primary}">
      ${label}
      ${icon ? `<i data-lucide="${icon}" class="h-4 w-4"></i>` : ""}
    </a>
  `;
}
