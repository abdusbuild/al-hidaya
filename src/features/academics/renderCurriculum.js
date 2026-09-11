import { CURRICULUM_STAGES } from "../../constants/academics.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";
import { createProgramCard } from "../../components/common/ProgramCard.js";

export function renderCurriculum() {
  const container = document.getElementById("curriculumSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({
            badge: "Curriculum",
            title: "Stage-wise Learning Journey",
            description: "Every stage blends Qur'an, Islamic Studies and CBSE-pattern academics.",
          })}
        </div>

        <div class="reveal mt-12 grid gap-6 lg:grid-cols-3">
          ${CURRICULUM_STAGES.map((stage) =>
            createProgramCard({
              icon: stage.icon,
              stage: stage.stage,
              title: stage.classes,
              description: stage.description,
              subjects: stage.subjects,
            })
          ).join("")}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
