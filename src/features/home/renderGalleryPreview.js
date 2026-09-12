import { GALLERY_ITEMS } from "../../constants/gallery.js";
import { createGalleryCard } from "../../components/common/GalleryCard.js";
import { createSectionHeading } from "../../components/common/sectionHeading.js";
import { createButton } from "../../components/common/Button.js";

export function renderGalleryPreview() {
  const container = document.getElementById("galleryPreviewSection");
  if (!container) return;

  const previewItems = GALLERY_ITEMS.slice(0, 4);

  container.innerHTML = `
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div class="reveal flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          ${createSectionHeading({
            badge: "Gallery",
            title: "A Glimpse of Life at Al-Hidayah",
            align: "left",
          })}
          <div class="shrink-0">
            ${createButton({ label: "View Full Gallery", href: "/pages/gallery.html", variant: "primary", icon: "arrow-right" })}
          </div>
        </div>

        <div class="reveal mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          ${previewItems
            .map(
              (item) => `
            <a
              href="/pages/gallery.html"
              aria-label="View full gallery: ${item.title}"
              class="block rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E3A73B]"
            >
              ${createGalleryCard(item)}
            </a>`
            )
            .join("")}
        </div>

      </div>
    </section>
  `;

  window.lucide?.createIcons();
}
