export function createSectionHeading({ badge, title, description, align = "center" }) {
  const alignClasses =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center mx-auto";

  return `
    <div class="flex flex-col ${alignClasses} max-w-2xl ${align === "left" ? "" : "mx-auto"}">
      ${
        badge
          ? `<span class="inline-flex items-center gap-2 rounded-full border border-[#0B6E4F]/20 bg-[#0B6E4F]/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#0B6E4F]">
              ${badge}
            </span>`
          : ""
      }
      <h2 class="mt-4 font-serif text-[28px] leading-tight text-[#1B1B1B] sm:text-[34px] lg:text-[40px]">
        ${title}
      </h2>
      ${
        description
          ? `<p class="mt-4 text-[15px] leading-7 text-[#5B5B5B] sm:text-[16px]">${description}</p>`
          : ""
      }
    </div>
  `;
}
