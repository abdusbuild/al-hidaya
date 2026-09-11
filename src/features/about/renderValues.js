import { CORE_VALUES } from "../../constants/about.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";
import { createInfoCard } from "../../components/common/InfoCard.js";

export function renderValues() {
  const container = document.getElementById("valuesSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-[#FBF8F1]">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({ badge: CORE_VALUES.badge, title: CORE_VALUES.title })}
        </div>

        <div class="reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${CORE_VALUES.values.map(createInfoCard).join("")}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
