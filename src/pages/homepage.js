import { initHero } from "../features/hero/index.js";
import { initMarquee } from "../features/marquee/index.js";
import { initHome } from "../features/home/index.js";

export function initHomePage() {
  initHero();
  initMarquee();
  initHome();
}
