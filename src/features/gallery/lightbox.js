let items = [];
let currentIndex = 0;

function getEls() {
  return {
    root: document.getElementById("galleryLightbox"),
    image: document.getElementById("lightboxImage"),
    title: document.getElementById("lightboxTitle"),
    description: document.getElementById("lightboxDescription"),
    counter: document.getElementById("lightboxCounter"),
  };
}

function ensureMarkup() {
  if (document.getElementById("galleryLightbox")) return;

  const el = document.createElement("div");
  el.id = "galleryLightbox";
  el.className = "fixed inset-0 z-[100] hidden items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-6";
  el.innerHTML = `
    <button
      type="button"
      id="lightboxClose"
      aria-label="Close photo viewer"
      class="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 sm:right-6 sm:top-6"
    >
      <i data-lucide="x" class="h-6 w-6"></i>
    </button>

    <button
      type="button"
      id="lightboxPrev"
      aria-label="Previous photo"
      class="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 sm:left-4"
    >
      <i data-lucide="chevron-left" class="h-6 w-6"></i>
    </button>

    <button
      type="button"
      id="lightboxNext"
      aria-label="Next photo"
      class="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 sm:right-4"
    >
      <i data-lucide="chevron-right" class="h-6 w-6"></i>
    </button>

    <figure class="flex max-h-full w-full max-w-4xl flex-col items-center gap-3 px-10 sm:px-14">
      <img
        id="lightboxImage"
        src=""
        alt=""
        class="max-h-[70vh] w-auto max-w-full rounded-xl object-contain shadow-2xl sm:max-h-[78vh]"
      />
      <figcaption class="max-w-full text-center">
        <span id="lightboxTitle" class="block font-serif text-[16px] text-white sm:text-[17px]"></span>
        <span id="lightboxDescription" class="mt-1 block text-[12.5px] text-white/70 sm:text-[13px]"></span>
        <span id="lightboxCounter" class="mt-2 block text-[11px] uppercase tracking-wide text-white/50"></span>
      </figcaption>
    </figure>
  `;

  document.body.appendChild(el);
  window.lucide?.createIcons();

  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", (e) => {
    e.stopPropagation();
    showAt(currentIndex - 1);
  });
  document.getElementById("lightboxNext").addEventListener("click", (e) => {
    e.stopPropagation();
    showAt(currentIndex + 1);
  });

  el.addEventListener("click", (e) => {
    if (e.target === el) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    const root = document.getElementById("galleryLightbox");
    if (!root || root.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showAt(currentIndex - 1);
    if (e.key === "ArrowRight") showAt(currentIndex + 1);
  });

  let touchStartX = null;
  el.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].clientX;
  });
  el.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) showAt(currentIndex + (dx < 0 ? 1 : -1));
    touchStartX = null;
  });
}

function showAt(index) {
  if (items.length === 0) return;
  currentIndex = (index + items.length) % items.length;
  const item = items[currentIndex];
  const { image, title, description, counter } = getEls();

  image.src = item.image;
  image.alt = item.title;
  title.textContent = item.title;
  description.textContent = item.description;
  counter.textContent = `${currentIndex + 1} / ${items.length}`;
}

function openLightbox(index) {
  ensureMarkup();
  const { root } = getEls();
  if (!root) return;

  showAt(index);
  root.classList.remove("hidden");
  root.classList.add("flex");
  document.body.classList.add("overflow-hidden");
}

function closeLightbox() {
  const { root } = getEls();
  if (!root) return;

  root.classList.add("hidden");
  root.classList.remove("flex");
  document.body.classList.remove("overflow-hidden");
}

export function initLightbox(galleryItems) {
  items = galleryItems.filter((item) => item.image);
  ensureMarkup();

  document.querySelectorAll("[data-lightbox-index]").forEach((card) => {
    card.addEventListener("click", () => {
      openLightbox(Number(card.dataset.lightboxIndex));
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(Number(card.dataset.lightboxIndex));
      }
    });
  });
}
