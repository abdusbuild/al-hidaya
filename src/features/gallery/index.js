import { renderHero } from "./renderHero.js";
import { renderGalleryGrid } from "./renderGalleryGrid.js";
import { renderGalleryCTA } from "./renderGalleryCTA.js";

export function initGallery() {
  renderHero();
  renderGalleryGrid();
  renderGalleryCTA();
}
