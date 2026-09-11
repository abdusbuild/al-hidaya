import { OUR_STORY, MISSION_VISION } from "../../constants/about.js";

export function renderStory() {
  const container = document.getElementById("storySection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">

          <div class="reveal">
            <span class="inline-flex items-center gap-2 rounded-full border border-[#0B6E4F]/20 bg-[#0B6E4F]/5 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#0B6E4F]">
              ${OUR_STORY.badge}
            </span>
            <h2 class="mt-4 font-serif text-[26px] leading-tight text-[#1B1B1B] sm:text-[32px] lg:text-[36px]">
              ${OUR_STORY.title}
            </h2>
            ${OUR_STORY.paragraphs
              .map((p) => `<p class="mt-5 text-[15px] leading-7 text-[#5B5B5B]">${p}</p>`)
              .join("")}
          </div>

          <div class="reveal grid grid-cols-1 gap-5">
            ${MISSION_VISION.map(
              (item) => `
              <div class="flex gap-4 rounded-2xl border border-[#E7E3DC] bg-[#FBF8F1] p-6">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B6E4F] text-white">
                  <i data-lucide="${item.icon}" class="h-5 w-5"></i>
                </div>
                <div>
                  <h3 class="font-serif text-[18px] text-[#1B1B1B]">${item.title}</h3>
                  <p class="mt-2 text-[14px] leading-6 text-[#666666]">${item.description}</p>
                </div>
              </div>`
            ).join("")}
          </div>

        </div>
      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
