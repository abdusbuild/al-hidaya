import { createButton } from "./Button.js";

export function createCTABanner({ title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref }) {
  return `
    <section class="relative overflow-hidden bg-[#0B6E4F] pattern-bg">
      <div class="absolute inset-0 bg-gradient-to-r from-[#0B6E4F] to-[#084a35]"></div>

      <div class="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 class="font-serif text-[26px] leading-tight text-white sm:text-[32px] lg:text-[36px]">
          ${title}
        </h2>
        <p class="max-w-2xl text-[15px] leading-7 text-white/85">${description}</p>
        <div class="mt-2 flex flex-wrap items-center justify-center gap-4">
          ${createButton({ label: primaryLabel, href: primaryHref, variant: "secondary", icon: "arrow-right" })}
          ${
            secondaryLabel
              ? createButton({ label: secondaryLabel, href: secondaryHref, variant: "outline" })
              : ""
          }
        </div>
      </div>
    </section>
  `;
}
