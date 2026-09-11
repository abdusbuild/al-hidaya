import { SCHOOL } from "../../constants/navigation.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";

export function renderForm() {
  const container = document.getElementById("contactFormSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-[#FBF8F1]">
      <div class="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({
            badge: "Send a Message",
            title: "Get in Touch",
            description: "Fill in the form and our team will reach out to you.",
          })}
        </div>

        <form id="contactForm" class="reveal mt-10 flex flex-col gap-5 rounded-2xl border border-[#E7E3DC] bg-white p-7 sm:p-8">

          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label class="flex flex-col gap-1.5 text-[13.5px] font-medium text-[#1B1B1B]">
              Your Name
              <input required type="text" name="name" class="rounded-xl border border-[#E7E3DC] px-4 py-3 text-[14px] outline-none transition focus:border-[#0B6E4F]" placeholder="Full name" />
            </label>
            <label class="flex flex-col gap-1.5 text-[13.5px] font-medium text-[#1B1B1B]">
              Phone Number
              <input required type="tel" name="phone" class="rounded-xl border border-[#E7E3DC] px-4 py-3 text-[14px] outline-none transition focus:border-[#0B6E4F]" placeholder="Your phone number" />
            </label>
          </div>

          <label class="flex flex-col gap-1.5 text-[13.5px] font-medium text-[#1B1B1B]">
            Message
            <textarea required name="message" rows="4" class="rounded-xl border border-[#E7E3DC] px-4 py-3 text-[14px] outline-none transition focus:border-[#0B6E4F]" placeholder="How can we help you?"></textarea>
          </label>

          <button
            type="submit"
            class="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B6E4F] px-6 py-3.5 text-[14.5px] font-semibold text-white transition hover:bg-[#095c41]"
          >
            Send Message
            <i data-lucide="send" class="h-4 w-4"></i>
          </button>

          <div id="contactFormNote" class="hidden rounded-xl border border-[#0B6E4F]/20 bg-[#0B6E4F]/5 p-4 text-[13.5px] leading-6 text-[#0B6E4F]"></div>

        </form>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
  attachContactFormHandler();
}

function attachContactFormHandler() {
  const form = document.getElementById("contactForm");
  const note = document.getElementById("contactFormNote");
  if (!form || !note) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || "there";

    note.classList.remove("hidden");
    note.innerHTML = `
      Thanks, ${name}! For a quicker response, please also message us on
      <a href="${SCHOOL.instagram}" target="_blank" rel="noopener noreferrer" class="font-semibold underline">Instagram @alhidayahfoundationschool</a>
      or visit us at ${SCHOOL.address}.
    `;

    form.reset();
  });
}
