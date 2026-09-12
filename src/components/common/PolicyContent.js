export function createPolicyContent({ updatedOn, sections }) {
  return `
    <section class="bg-white">
      <div class="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        ${
          updatedOn
            ? `<p class="reveal text-[13px] font-medium uppercase tracking-wide text-[#5B5B5B]">Last updated: ${updatedOn}</p>`
            : ""
        }

        <div class="mt-8 flex flex-col gap-10">
          ${sections
            .map(
              (section) => `
            <div class="reveal">
              <h2 class="font-serif text-[20px] text-[#1B1B1B] sm:text-[22px]">${section.heading}</h2>
              ${section.paragraphs
                .map((p) => `<p class="mt-3 text-[15px] leading-7 text-[#5B5B5B]">${p}</p>`)
                .join("")}
              ${
                section.list
                  ? `<ul class="mt-3 flex flex-col gap-2">
                      ${section.list
                        .map(
                          (item) => `
                        <li class="flex items-start gap-2.5 text-[15px] leading-7 text-[#5B5B5B]">
                          <span class="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B6E4F]"></span>
                          ${item}
                        </li>`
                        )
                        .join("")}
                    </ul>`
                  : ""
              }
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}
