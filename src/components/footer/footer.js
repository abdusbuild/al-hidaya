import { createFooterLinksColumn } from "./footerLinks.js";
import { SCHOOL, NAV_LINKS } from "../../constants/navigation.js";
import { createIcon } from "../common/Icon.js";

export function createFooter() {
  const quickLinks = NAV_LINKS.map((l) => ({ label: l.label, href: l.href }));

  const resourceLinks = [
    { label: "Admissions", href: "/pages/admissions.html" },
    { label: "Academics", href: "/pages/academics.html" },
    { label: "Gallery", href: "/pages/gallery.html" },
    { label: "Instagram", href: SCHOOL.instagram, target: "_blank" },
  ];

  return `
    <footer class="relative overflow-hidden bg-[#0B1F17] pattern-bg">
      <div class="absolute inset-0 bg-[#0B1F17]/95"></div>

      <div class="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div class="lg:col-span-2">
            <div class="flex items-center gap-3">
              <img src="/public/assets/logo-white.png" alt="${SCHOOL.name}" class="h-14 w-14" />
              <div>
                <p class="font-serif text-[18px] text-white">${SCHOOL.name}</p>
                <p class="text-[12px] font-medium uppercase tracking-wide text-[#E3A73B]">${SCHOOL.board}</p>
              </div>
            </div>
            <p class="mt-5 max-w-sm text-[14px] leading-6 text-white/70">
              An Islamic cum English medium school nurturing Qur'an, character and CBSE-pattern academics for the children of Nawadih, Aurangabad.
            </p>
            <a
              href="${SCHOOL.instagram}"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[13.5px] font-semibold text-white transition hover:border-[#E3A73B] hover:text-[#E3A73B]"
            >
              ${createIcon("instagram", "h-4 w-4")}
              @alhidayahfoundationschool
            </a>
          </div>

          ${createFooterLinksColumn({ title: "Quick Links", links: quickLinks })}
          ${createFooterLinksColumn({ title: "Explore", links: resourceLinks })}
        </div>

        <div class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[12.5px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© <span id="currentYear"></span> ${SCHOOL.name}. All rights reserved.</p>
          <div class="flex flex-col gap-3 sm:flex-row sm:gap-5">
            <a href="/pages/privacy-policy.html" class="transition hover:text-[#E3A73B]">Privacy Policy</a>
            <a href="/pages/terms-and-conditions.html" class="transition hover:text-[#E3A73B]">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
