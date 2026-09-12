import { CONTACT_DETAILS, MAP_EMBED_QUERY } from "../../constants/contact.js";
import { createIcon } from "../../components/common/Icon.js";

export function renderDetailsAndMap() {
  const container = document.getElementById("detailsMapSection");
  if (!container) return;

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(MAP_EMBED_QUERY)}&output=embed`;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-5">

          <div class="reveal flex flex-col gap-5 lg:col-span-2">
            ${CONTACT_DETAILS.map(
              (detail) => `
              <div class="flex items-start gap-4 rounded-2xl border border-[#E7E3DC] bg-[#FBF8F1] p-6">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B6E4F] text-white">
                  ${createIcon(detail.icon, "h-5 w-5")}
                </div>
                <div>
                  <h3 class="font-serif text-[16px] text-[#1B1B1B]">${detail.title}</h3>
                  ${detail.lines
                    .map(
                      (line) =>
                        `<p class="mt-1 text-[14px] leading-6 text-[#666666]">${
                          detail.href
                            ? detail.href.startsWith("tel:")
                              ? `<a href="${detail.href}" class="hover:text-[#0B6E4F]">${line}</a>`
                              : `<a href="${detail.href}" target="_blank" rel="noopener noreferrer" class="hover:text-[#0B6E4F]">${line}</a>`
                            : line
                        }</p>`
                    )
                    .join("")}
                </div>
              </div>`
            ).join("")}
          </div>

          <div class="reveal overflow-hidden rounded-2xl border border-[#E7E3DC] lg:col-span-3">
            <iframe
              title="School location map"
              src="${mapSrc}"
              class="h-full min-h-[320px] w-full"
              style="border:0;"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
