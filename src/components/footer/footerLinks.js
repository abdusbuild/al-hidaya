export function createFooterLinksColumn({ title, links }) {
  return `
    <div>
      <h4 class="font-serif text-[15px] text-white">${title}</h4>
      <ul class="mt-4 flex flex-col gap-2.5">
        ${links
          .map(
            (link) => `
          <li>
            <a href="${link.href}" ${link.target ? `target="${link.target}" rel="noopener noreferrer"` : ""} class="text-[13.5px] text-white/70 transition hover:text-[#E3A73B]">
              ${link.label}
            </a>
          </li>`
          )
          .join("")}
      </ul>
    </div>
  `;
}
