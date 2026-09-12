import { renderHero } from "./renderHero.js";
import { renderStory } from "./renderStory.js";
import { renderLeadership } from "./renderLeadership.js";
import { renderValues } from "./renderValues.js";
import { renderTeachers } from "./renderTeachers.js";
import { renderCommitment } from "./renderCommitment.js";
import { renderCTA } from "./renderCTA.js";

export function initAbout() {
  renderHero();
  renderStory();
  renderLeadership();
  renderValues();
  renderTeachers();
  renderCommitment();
  renderCTA();
}
