import { NAV_LINKS, SCHOOL } from "../../constants/navigation.js";
import { createIcon } from "../common/Icon.js";

export function createMobileNav() {
  return `
    <div
      id="mobileDrawer"
      class="fixed inset-0 z-[60] hidden"
      aria-hidden="true"
    >
      <div id="mobileOverlay" class="absolute inset-0 bg-black/50"></div>

      <div
        class="
          absolute right-0 top-0 flex h-full w-[82%] max-w-sm translate-x-full
          flex-col bg-white shadow-2xl transition-transform duration-300 ease-out
        "
        id="mobilePanel"
      >
        <div class="flex items-center justify-between border-b border-[#E7E3DC] px-5 py-5">
          <img src="/public/assets/logo-white.png" alt="${SCHOOL.name}" class="h-10 w-10" />
          <button id="mobileCloseBtn" type="button" aria-label="Close menu" class="rounded-full p-2 text-[#1B1B1B] hover:bg-[#F5F3EE]">
            <i data-lucide="x" class="h-6 w-6"></i>
          </button>
        </div>

        <ul class="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          ${NAV_LINKS.map(
            (link) => `
            <li>
              <a
                href="${link.href}"
                data-nav-mobile
                data-page="${link.page}"
                class="mobile-nav-link block rounded-xl px-4 py-3 text-[15px] font-medium text-[#1B1B1B] hover:bg-[#0B6E4F]/5 hover:text-[#0B6E4F]"
              >
                ${link.label}
              </a>
            </li>`
          ).join("")}
        </ul>

        <div class="border-t border-[#E7E3DC] p-5">
          <a
            href="${SCHOOL.instagram}"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 rounded-full bg-[#0B6E4F] px-5 py-3 text-[14px] font-semibold text-white"
          >
            ${createIcon("instagram", "h-4 w-4")}
            Follow Us
          </a>
        </div>
      </div>
    </div>
  `;
}
