import { GALLERY_ITEMS } from "../../constants/gallery.js";
import { createGalleryCard } from "../../components/common/GalleryCard.js";

export function renderGalleryGrid() {
  const container = document.getElementById("galleryGridSection");
  if (!container) return;

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div class="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${GALLERY_ITEMS.map(createGalleryCard).join("")}
        </div>
      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
