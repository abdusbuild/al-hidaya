import { ADMISSION_PROCESS } from "../../constants/home.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";
import { createStepCard } from "../../components/common/StepCard.js";
import { createButton } from "../../components/common/Button.js";

export function renderAdmissionProcess() {
  const container = document.getElementById("admissionProcessSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({
            badge: "Admissions",
            title: "How to Join Al-Hidayah",
            description: "A simple four-step process to enrol your child.",
          })}
        </div>

        <div class="reveal mt-12 flex flex-col">
          ${ADMISSION_PROCESS.map((step, i) =>
            createStepCard({ ...step, isLast: i === ADMISSION_PROCESS.length - 1 })
          ).join("")}
        </div>

        <div class="reveal flex justify-center">
          ${createButton({ label: "See Full Admission Guide", href: "/pages/admissions.html", variant: "primary", icon: "arrow-right" })}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
