import { FACILITIES } from "../../constants/home.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";
import { createInfoCard } from "../../components/common/InfoCard.js";

export function renderFacilities() {
  const container = document.getElementById("facilitiesSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-[#FBF8F1]">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({ badge: FACILITIES.badge, title: FACILITIES.title })}
        </div>

        <div class="reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${FACILITIES.cards.map(createInfoCard).join("")}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
