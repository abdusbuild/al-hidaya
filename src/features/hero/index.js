import { createHero } from "../../components/hero/index.js";
import { initHeroSlider } from "./slider.js";

export function initHero() {
  const root = document.getElementById("heroRoot");
  if (!root) return;

  root.innerHTML = createHero();

  window.lucide?.createIcons();

  initHeroSlider();
}
