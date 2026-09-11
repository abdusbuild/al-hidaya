import { renderHero } from "./renderHero.js";
import { renderStory } from "./renderStory.js";
import { renderValues } from "./renderValues.js";
import { renderCommitment } from "./renderCommitment.js";
import { renderCTA } from "./renderCTA.js";

export function initAbout() {
  renderHero();
  renderStory();
  renderValues();
  renderCommitment();
  renderCTA();
}
