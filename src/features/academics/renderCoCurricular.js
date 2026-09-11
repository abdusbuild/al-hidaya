import { CO_CURRICULAR } from "../../constants/academics.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";
import { createInfoCard } from "../../components/common/InfoCard.js";

export function renderCoCurricular() {
  const container = document.getElementById("coCurricularSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({ badge: CO_CURRICULAR.badge, title: CO_CURRICULAR.title })}
        </div>

        <div class="reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${CO_CURRICULAR.activities.map(createInfoCard).join("")}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
