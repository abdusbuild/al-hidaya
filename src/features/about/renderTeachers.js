import { OUR_TEACHERS } from "../../constants/about.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";
import { createTeacherCard } from "../../components/common/TeacherCard.js";

export function renderTeachers() {
  const container = document.getElementById("teachersSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({
            badge: OUR_TEACHERS.badge,
            title: OUR_TEACHERS.title,
            description: OUR_TEACHERS.description,
          })}
        </div>

        <div class="reveal mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${OUR_TEACHERS.teachers.map(createTeacherCard).join("")}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
