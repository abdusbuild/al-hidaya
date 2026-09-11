import { initHero } from "../features/hero/index.js";
import { initHome } from "../features/home/index.js";

export function initHomePage() {
  initHero();
  initHome();
}
