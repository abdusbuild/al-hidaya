import { PROGRAM_PREVIEW } from "../../constants/home.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";
import { createProgramCard } from "../../components/common/ProgramCard.js";
import { createButton } from "../../components/common/Button.js";

export function renderPrograms() {
  const container = document.getElementById("programsSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({
            badge: PROGRAM_PREVIEW.badge,
            title: PROGRAM_PREVIEW.title,
            description: PROGRAM_PREVIEW.description,
          })}
        </div>

        <div class="reveal mt-12 grid gap-5 sm:grid-cols-2">
          ${PROGRAM_PREVIEW.programs.map((p) => createProgramCard(p)).join("")}
        </div>

        <div class="reveal mt-10 flex justify-center">
          ${createButton({ label: "View Full Curriculum", href: "/pages/academics.html", variant: "ghost", icon: "arrow-right" })}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
