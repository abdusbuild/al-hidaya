import { FAQS } from "../../constants/home.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";
import { createFaqCard } from "../../components/faq/faqCard.js";
import { initAccordion } from "../faq/accordion.js";

export function renderFAQ() {
  const container = document.getElementById("faqSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-[#FBF8F1]">
      <div class="mx-auto max-w-3xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({
            badge: "FAQs",
            title: "Frequently Asked Questions",
            description: "Answers to common questions from parents.",
          })}
        </div>

        <div class="reveal mt-10">
          ${FAQS.map((faq, i) => createFaqCard({ ...faq, index: i })).join("")}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
  initAccordion(container);
}
