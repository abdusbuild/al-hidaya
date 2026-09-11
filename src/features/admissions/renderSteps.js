import { ADMISSION_STEPS } from "../../constants/admissions.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";
import { createStepCard } from "../../components/common/StepCard.js";

export function renderSteps() {
  const container = document.getElementById("stepsSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-4xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({
            badge: "Admission Process",
            title: "Five Simple Steps",
            description: "Here's what to expect when applying to Al-Hidayah Foundation School.",
          })}
        </div>

        <div class="reveal mt-12 flex flex-col">
          ${ADMISSION_STEPS.map((step, i) =>
            createStepCard({ ...step, isLast: i === ADMISSION_STEPS.length - 1 })
          ).join("")}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
