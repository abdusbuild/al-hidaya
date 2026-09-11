import { SCHOOL } from "../../constants/navigation.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";

export function renderEnquiryForm() {
  const container = document.getElementById("enquirySection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-[#FBF8F1]">
      <div class="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal">
          ${createSectionHeading({
            badge: "Admission Enquiry",
            title: "Start Your Enquiry",
            description: "Share a few details and our team will get in touch with you.",
          })}
        </div>

        <form id="admissionEnquiryForm" class="reveal mt-10 flex flex-col gap-5 rounded-2xl border border-[#E7E3DC] bg-white p-7 sm:p-8">

          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label class="flex flex-col gap-1.5 text-[13.5px] font-medium text-[#1B1B1B]">
              Parent/Guardian Name
              <input required type="text" name="parentName" class="rounded-xl border border-[#E7E3DC] px-4 py-3 text-[14px] outline-none transition focus:border-[#0B6E4F]" placeholder="Your name" />
            </label>
            <label class="flex flex-col gap-1.5 text-[13.5px] font-medium text-[#1B1B1B]">
              Phone Number
              <input required type="tel" name="phone" class="rounded-xl border border-[#E7E3DC] px-4 py-3 text-[14px] outline-none transition focus:border-[#0B6E4F]" placeholder="Your phone number" />
            </label>
          </div>

          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label class="flex flex-col gap-1.5 text-[13.5px] font-medium text-[#1B1B1B]">
              Child's Name
              <input required type="text" name="childName" class="rounded-xl border border-[#E7E3DC] px-4 py-3 text-[14px] outline-none transition focus:border-[#0B6E4F]" placeholder="Child's name" />
            </label>
            <label class="flex flex-col gap-1.5 text-[13.5px] font-medium text-[#1B1B1B]">
              Class Interested In
              <input required type="text" name="classInterested" class="rounded-xl border border-[#E7E3DC] px-4 py-3 text-[14px] outline-none transition focus:border-[#0B6E4F]" placeholder="e.g. Nursery, Class 3" />
            </label>
          </div>

          <label class="flex flex-col gap-1.5 text-[13.5px] font-medium text-[#1B1B1B]">
            Message (optional)
            <textarea name="message" rows="3" class="rounded-xl border border-[#E7E3DC] px-4 py-3 text-[14px] outline-none transition focus:border-[#0B6E4F]" placeholder="Any questions for us?"></textarea>
          </label>

          <button
            type="submit"
            class="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#0B6E4F] px-6 py-3.5 text-[14.5px] font-semibold text-white transition hover:bg-[#095c41]"
          >
            Submit Enquiry
            <i data-lucide="send" class="h-4 w-4"></i>
          </button>

          <div id="enquiryFormNote" class="hidden rounded-xl border border-[#0B6E4F]/20 bg-[#0B6E4F]/5 p-4 text-[13.5px] leading-6 text-[#0B6E4F]"></div>

        </form>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
  attachFormHandler();
}

function attachFormHandler() {
  const form = document.getElementById("admissionEnquiryForm");
  const note = document.getElementById("enquiryFormNote");
  if (!form || !note) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const parentName = data.get("parentName") || "there";

    note.classList.remove("hidden");
    note.innerHTML = `
      Thank you, ${parentName}! To make sure your enquiry reaches us quickly, please also message us on
      <a href="${SCHOOL.instagram}" target="_blank" rel="noopener noreferrer" class="font-semibold underline">Instagram @alhidayahfoundationschool</a>
      or visit the school office at ${SCHOOL.address}.
    `;

    form.reset();
  });
}
