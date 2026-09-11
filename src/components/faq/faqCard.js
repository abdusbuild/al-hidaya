export function createFaqCard({ question, answer, index }) {
  return `
    <div class="border-b border-[#E7E3DC] py-2" data-faq-item>
      <button
        type="button"
        class="accordion-trigger flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded="false"
        aria-controls="faq-panel-${index}"
      >
        <span class="font-serif text-[16px] text-[#1B1B1B] sm:text-[17px]">${question}</span>
        <i data-lucide="chevron-down" class="accordion-chevron h-5 w-5 shrink-0 text-[#0B6E4F]"></i>
      </button>
      <div id="faq-panel-${index}" class="accordion-panel max-h-0">
        <p class="pb-5 pr-8 text-[14px] leading-6 text-[#666666]">${answer}</p>
      </div>
    </div>
  `;
}
