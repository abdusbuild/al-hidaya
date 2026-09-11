import { NAV_LINKS } from "../../constants/navigation.js";

export function createDesktopNav() {
  return `
    <ul class="hidden items-center gap-8 lg:flex">
      ${NAV_LINKS.map(
        (link) => `
        <li>
          <a
            href="${link.href}"
            data-nav
            data-page="${link.page}"
            class="navbar-text text-[14px] font-medium tracking-wide transition-colors duration-200 hover:text-[#E3A73B]"
          >
            ${link.label}
          </a>
        </li>`
      ).join("")}
    </ul>
  `;
}
