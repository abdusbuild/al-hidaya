import { LEADERSHIP_MESSAGES } from "../../constants/about.js";
import { SCHOOL } from "../../constants/navigation.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";

function createMessageCard({ name, role, message }) {
  return `
    <article class="reveal relative flex flex-col gap-5 rounded-2xl border border-[#E7E3DC] bg-white p-7 shadow-[0_8px_30px_rgba(24,24,24,.04)]">
      <i data-lucide="quote" class="h-8 w-8 shrink-0 text-[#E3A73B]/60"></i>
      <p class="text-[14.5px] leading-7 text-[#5B5B5B]">${message}</p>
      <div class="mt-auto flex items-center gap-4 border-t border-[#E7E3DC] pt-5">
        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0B6E4F]/10 font-serif text-[15px] text-[#0B6E4F]">
          ${name
            .replace(/^Md\.\s*/i, "")
            .trim()
            .split(/\s+/)
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </div>
        <div>
          <p class="font-serif text-[16px] text-[#1B1B1B]">${name}</p>
          <p class="text-[12.5px] font-semibold uppercase tracking-wide text-[#E3A73B]">${role}</p>
        </div>
      </div>
    </article>
  `;
}

export function renderLeadership() {
  const container = document.getElementById("leadershipSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-[#FBF8F1]">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({ badge: LEADERSHIP_MESSAGES.badge, title: LEADERSHIP_MESSAGES.title })}
        </div>

        <div class="reveal mx-auto mt-8 flex w-fit items-center gap-3 rounded-full bg-[#0B6E4F] px-6 py-3 text-white shadow-[0_10px_30px_rgba(11,110,79,.20)]">
          <i data-lucide="${LEADERSHIP_MESSAGES.stat.icon}" class="h-5 w-5 text-[#E3A73B]"></i>
          <span class="font-serif text-[20px]">${LEADERSHIP_MESSAGES.stat.value}</span>
          <span class="text-[13.5px] text-white/85">${LEADERSHIP_MESSAGES.stat.label}</span>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2">
          ${LEADERSHIP_MESSAGES.messages.map(createMessageCard).join("")}
        </div>

        <p class="reveal mt-8 text-center text-[13.5px] text-[#666666]">
          Have a question for our leadership team?
          <a href="${SCHOOL.phoneHref}" class="font-semibold text-[#0B6E4F] hover:underline">Call us at ${SCHOOL.phone}</a>
        </p>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
