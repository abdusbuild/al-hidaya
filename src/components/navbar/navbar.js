import { createDesktopNav } from "./desktopNav.js";
import { createMobileNav } from "./mobileNav.js";
import { SCHOOL } from "../../constants/navigation.js";

export function createNavbar() {
  return `
    <header
      id="siteNavbar"
      class="fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out"
    >
      <nav
        aria-label="Primary"
        class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
      >
        <a href="/index.html" class="flex items-center gap-3">
          <img src="/public/assets/logo.svg" alt="${SCHOOL.name}" class="h-11 w-11 sm:h-12 sm:w-12" />
          <span class="flex flex-col leading-tight">
            <span class="font-serif text-[15px] font-semibold sm:text-[17px]">${SCHOOL.name}</span>
            <span class="text-[11px] font-medium uppercase tracking-wide text-[#E3A73B]">${SCHOOL.board}</span>
          </span>
        </a>

        ${createDesktopNav()}

        <div class="flex items-center gap-3">
          <a
            href="/pages/admissions.html"
            class="hidden rounded-full bg-[#0B6E4F] px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_rgba(11,110,79,.25)] transition hover:bg-[#095c41] sm:inline-flex"
          >
            Apply Now
          </a>

          <button
            id="mobileMenuBtn"
            type="button"
            aria-label="Open menu"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-current/15 lg:hidden"
          >
            <i data-lucide="menu" class="h-5 w-5"></i>
          </button>
        </div>
      </nav>
    </header>

    ${createMobileNav()}
  `;
}
