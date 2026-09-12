import { GALLERY_ITEMS } from "../../constants/gallery.js";
import { createGalleryCard } from "../../components/common/GalleryCard.js";
import { initLightbox } from "./lightbox.js";

export function renderGalleryGrid() {
  const container = document.getElementById("galleryGridSection");
  if (!container) return;

  let lightboxIndex = 0;
  const cards = GALLERY_ITEMS.map((item) => {
    const index = item.image ? lightboxIndex++ : null;
    return createGalleryCard(item, index);
  }).join("");

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div class="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${cards}
        </div>
      </div>
    </section>
  `;

  window.lucide?.createIcons();
  initLightbox(GALLERY_ITEMS);
}
